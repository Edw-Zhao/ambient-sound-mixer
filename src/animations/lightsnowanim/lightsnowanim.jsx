import React, { Component } from "react";
import "./lightsnowanim.scss";

class LightSnowAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let snowquan = [];
    for (let i = 0; 50 > i; i++) {
      snowquan.push(<div className="snow" key={i}></div>);
    }

    return (
      <div className="dimension">
        <div className="ssizer">{snowquan}</div>
      </div>
    );
  }
}

export default LightSnowAnim;
