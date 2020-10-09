import React, { Component } from "react";
import "./rainanim.css";

class RainAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sizer4">
        <div className="weather rain"></div>
      </div>
    );
  }
}

export default RainAnim;
