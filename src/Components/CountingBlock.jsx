import React, { Component } from "react";
import "../Styles/counting.css";

class CountingBlock extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 0,
    };
    this.increment = this.increment.bind(this);
  }

  secondsToTime(secs) {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let time = this.secondsToTime(this.state.seconds);
    this.setState({ time: time });
    setInterval(this.increment, 1000);
  }

  increment() {
    let seconds = this.state.seconds + 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
  }

  render() {
    return (
      <div id='counting'>
        <h3>
          <div id='time'>
            {this.state.time.m} m {this.state.time.s} s
          </div>
        </h3>
        <h2>
          <div id='title'>Still want to spend more time on here?</div>
        </h2>
      </div>
    );
  }
}

export default CountingBlock;
