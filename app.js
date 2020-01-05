const express = require('express');
const pty = require('node-pty');

const app = express();
const expressWs = require('express-ws')(app);

// Serve static assets from ./static
app.use(express.static(`${__dirname}`));

// Instantiate shell and set up data handlers
expressWs.app.ws('/:challenge', (ws, req) => {
  const challenge = req.params.challenge;
  // Spawn the shell
  const shell = pty.spawn('docker', [
    'run', '-it', '--rm',
    '--network', 'none',
    `git-ch:${challenge}`,
  ], {
    name: 'xterm-color',
    cwd: process.env.PWD,
    env: process.env
  });
  // For all shell data send it to the websocket
  shell.on('data', (data) => {
    if (ws.readyState === 1) {
      ws.send(data);
    }
  });
  // For all websocket data send it to the shell
  ws.on('message', (msg) => {
    shell.write(msg);
  });

  ws.on('close', () => {
    shell.write('exit\r');
  });
});

// Start the application
app.listen(3000);
