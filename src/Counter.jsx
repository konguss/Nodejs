import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  reset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div >
        <div className="Counter">
        <p className="count">{count}</p>
        </div>
        <section className="controls">
          <button className="button-increment" onClick={this.increment}>Increment</button>
          <button className="button-decrement" onClick={this.decrement}>Decrement</button>
        </section>
      </div>
    );
  }
}

export default Counter;
