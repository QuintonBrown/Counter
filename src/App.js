
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  //INTALIZATION
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }


  // MOUNTING & UPDATING
  render() {
    return (
      <div className="main--container">
        <div className="counter--border">
          <div className="counter--container">
          <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
          </div>
        </div>
      </div>
    );
  }
}
export default App;