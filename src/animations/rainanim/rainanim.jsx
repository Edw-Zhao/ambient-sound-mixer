import React, { Component } from "react";
import "./weather.css";
import "./rainanim.css";

class RainAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="rsizer">
          <div className="weather rain"></div>
        </div>
      </div>
    );
  }
}

export default RainAnim;
