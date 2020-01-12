import React, { Component } from "react";
import Sidebar from './sidebar';

import style from './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = { name: 'Not Selected Yet!' }
  }
  render() {
    const items = [
      {
        label: 'meshde',
        name: 'Mehmood'
      },
      {
        label: 'pandey',
        name: 'Nitin'
      }
    ]

    const handleClick = (name) => {
      this.setState({ name });
    }
    return (
      <div>
        <Sidebar items={items} handleClick={handleClick} />
        <div className={style.main}>{this.state.name}</div>
      </div>
    )
  }
}
export default App;
