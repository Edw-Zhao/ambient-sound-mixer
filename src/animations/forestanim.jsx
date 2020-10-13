import React, { Component } from "react";
import "./forestanim.css";

class ForestAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sizer6">
        <div className="grass"></div>
        <div className="grass2"></div>
        <div className="grass3"></div>
        <div className="grass4"></div>
        <div className="grass5"></div>
        <div className="grass6"></div>
        <div className="grass7"></div>
      </div>
    );
  }
}

export default ForestAnim;
