import React, { Component } from "react";
import "./thunderanim.css";

class ThunderAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flash">
        <div className="lightning"></div>
      </div>
    );
  }
}

export default ThunderAnim;
