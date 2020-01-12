import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';
import 'xterm/dist/xterm.css';

export default class GitTerminal extends Component {
  constructor(props) {
    super(props);
    const { challenge } = props;
    this.state = { challenge };
    this.setChallenge(challenge);
    this.term = new Terminal();
  }

  close() {
    this.term.destroy();
    this.socket.close();
  }

  setChallenge (challenge) {
    const protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
    const port = location.port ? `:${location.port}` : '';
    this.socketUrl = `${protocol}${location.hostname}${port}/${challenge}`;
    this.challenge = challenge;
    console.log("setChallenge")
    console.log(this.props);
  }

  createSocket() {
    this.socket = new WebSocket(this.socketUrl);
    this.socket.onopen = (ev) => { this.term.loadAddon(new AttachAddon(this.socket)); }
  }

  componentWillUnmount() {
    this.close();
  }

  componentDidMount() {
    const terminalContainer = findDOMNode(this);
    this.term.open(terminalContainer);
    this.createSocket();
  }

  resetTerminal(challenge) {
    this.socket.close();
    this.term.reset();
    this.setChallenge(challenge);
    this.createSocket();
  }

  componentDidUpdate(prevProps) {
    if (this.props.challenge !== prevProps.challenge) {
      this.resetTerminal(this.props.challenge);
    }
  }

  render() {
    return (
      <div id="terminal" />
    );
  }
}
