import React, { Component } from "react";
import "./wavesanim.scss";

class WavesAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sizer">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    );
  }
}

export default WavesAnim;
