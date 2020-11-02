import React, { Component } from "react";
import "./underwateranim.scss";

class UnderWaterAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="uwsizer">
          <div className="sea">
            <div className="circle-wrapper">
              <div className="bubble"></div>
              <div className="submarine-wrapper">
                <div className="submarine-body">
                  <div className="subwindow"></div>
                  <div className="engine"></div>
                  <div className="sublight"></div>
                </div>
                <div className="helix"></div>
                <div className="hat">
                  <div className="leds-wrapper">
                    <div className="periscope"></div>
                    <div className="leds"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnderWaterAnim;
