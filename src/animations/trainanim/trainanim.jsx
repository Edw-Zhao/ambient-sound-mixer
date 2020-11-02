import React, { Component } from "react";
import "./trainanim.css";

class TrainAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="tsizer">
          <div className="tcontainer">
            <div className="tmoon"></div>
            <div className="tcloud-container">
              <div className="tcloud"></div>
              <div className="tcloud"></div>
              <div className="ttcloud"></div>
              <div className="tcloud"></div>
              <div className="tcloud"></div>
            </div>

            <div className="tstars">
              <div className="tstar"></div> <div className="tstar"></div>{" "}
              <div className="tstar"></div> <div className="tstar"></div>{" "}
              <div className="tstar"></div> <div className="tstar"></div>{" "}
              <div className="tstar"></div>
            </div>
            <div className="mountain"></div>
            <div className="train-container">
              <div className="train">
                <div className="train-car head-car">
                  <div className="windows">
                    <div className="head-car-window"></div>
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                  <div className="door"></div>
                </div>

                <div className="train-car">
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                  <div className="door"></div>
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                </div>

                <div className="train-car">
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                  <div className="door"></div>
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                </div>

                <div className="train-car">
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                  <div className="door"></div>
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                </div>

                <div className="train-car">
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                  <div className="door"></div>
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                  </div>
                </div>

                <div className="train-car end-car">
                  <div className="door"></div>
                  <div className="windows">
                    <div className="w-left"></div>
                    <div className="w-right"></div>
                    <div className="end-car-window"></div>
                  </div>
                </div>
              </div>
              <div className="train-track">
                <div className="ledge"></div>
                <div className="pillar">
                  <div className="pillar-left"></div>
                  <div className="pillar-middle"></div>
                  <div className="pillar-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainAnim;
