import React, { Component } from "react";
import Sidebar from './sidebar';
import Terminal from './terminal';
import axios from 'axios';

import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = { items: [] };
    this.setChallenges();
  }

  async setChallenges() {
    const { data: items } = await axios.get('/challenges');
    this.setState({
      items,
      name: items[0].name
    });
  }

  render() {

    const handleClick = (name) => {
      this.setState({ name });
    }

    return (
      <div>
        <Sidebar items={this.state.items} handleClick={handleClick} />
        <div className="main">
          <Terminal challenge={this.state.name} />
        </div>
      </div>
    )
  }
}
export default App;
