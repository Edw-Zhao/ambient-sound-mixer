import React, { Component } from "react";
import "./gentlebreezeanim.scss";

class GentleBreezeAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="gbcontainer">
          <div className="gsky"></div>
          <div className="sun"></div>
          <div className="gclouds">
            <div className="gcloud-group left">
              <div className="top"></div>
              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
            <div className="gcloud-group right">
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
            <div className="gbirds">
              <div className="gbird gbird-1">
                <div className="gwing left"></div>
                <div className="body"></div>
                <div className="gwing right"></div>
              </div>
              <div className="gbird gbird-2">
                <div className="gwing left"></div>
                <div className="body"></div>
                <div className="gwing right"></div>
              </div>
              <div className="gbird gbird-3">
                <div className="gwing left"></div>
                <div className="body"></div>
                <div className="gwing right"></div>
              </div>
            </div>
          </div>
          <div className="earth"></div>
          <div className="trees">
            <div className="tree">
              <div className="tree-top"></div>
              <div className="tree-bottom"></div>
            </div>
            <div className="tree small">
              <div className="tree-top"></div>
              <div className="tree-bottom"></div>
            </div>
          </div>
          <div className="wind-mills">
            <div className="wind-mill wind-mill-1">
              <div className="foot"></div>
              <div className="gwings">
                <div className="gwing"></div>
              </div>
            </div>
            <div className="wind-mill wind-mill-2">
              <div className="foot"></div>
              <div className="gwings">
                <div className="gwing"></div>
              </div>
            </div>
            <div className="wind-mill wind-mill-3">
              <div className="foot"></div>
              <div className="gwings">
                <div className="gwing"></div>
              </div>
            </div>
            <div className="wind-mill wind-mill-4">
              <div className="foot"></div>
              <div className="gwings">
                <div className="gwing"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GentleBreezeAnim;
