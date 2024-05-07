import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Start");
  }

  componentWillUnmount() {
    console.log("End");
  }

  componentDidUpdate(prevState) {
    console.log("Component updated");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>

        <p>{this.state.count}</p>

        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}
