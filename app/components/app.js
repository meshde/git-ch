import React, { Component } from "react";
import Sidebar from './sidebar';
import Terminal from './terminal';

import style from './app.css';

class App extends Component {
  constructor() {
    super()
    this.items = [
      {
        label: 'move-commit-from-branch-a-to-b',
        name: 'move-commit-from-branch-a-to-b'
      },
      {
        label: 'local-ignore',
        name: 'local-ignore'
      }
    ]
    this.state = { name: this.items[0].name }
  }
  render() {

    const handleClick = (name) => {
      this.setState({ name });
    }

    return (
      <div>
        <Sidebar items={this.items} handleClick={handleClick} />
        <div className={style.main}>
          <Terminal challenge={this.state.name} />
        </div>
      </div>
    )
  }
}
export default App;
