import React, { Component } from "react";
import "./forestanim.css";

class ForestAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="fsizer">
          <div className="grass"></div>
          <div className="whiteflowers"></div>
          <div className="petals"></div>
          <div className="blueflowers"></div>
          <div className="pinkflowers"></div>
          <div className="maplebranch"></div>
          <div className="grapes"></div>
        </div>
      </div>
    );
  }
}

export default ForestAnim;
