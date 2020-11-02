import React, { Component } from "react";
import "./scribblinganim.css";

class ScribblingAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="scsizer">
          <div className="feather"></div>
          <div className="paper"></div>
        </div>
      </div>
    );
  }
}

export default ScribblingAnim;
