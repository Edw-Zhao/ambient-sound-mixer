import React, { Component } from "react";
import "./bigbenanim.scss";

class BigBenAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dimension">
        <div className="bbsizer">
          <div className="container23">
            <div className="sky">
              <div className="stars">
                <div className="falling-stars">
                  <div className="star-fall"></div>
                  <div className="star-fall"></div>
                  <div className="star-fall"></div>
                  <div className="star-fall"></div>
                </div>
                <div className="small-stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <div className="medium-stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
              </div>
              <div className="clouds">
                <div className="dark cloud-1">
                  <div className="top">
                    <div className="part"></div>
                  </div>
                  <div className="middle">
                    <div className="part"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
                <div className="lighter cloud-1">
                  <div className="top">
                    <div className="part"></div>
                  </div>
                  <div className="middle">
                    <div className="part"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
                <div className="lighter cloud-2">
                  <div className="top"></div>
                  <div className="middle"></div>
                  <div className="bottom"></div>
                </div>
                <div className="lighter cloud-3">
                  <div className="top"></div>
                  <div className="middle"></div>
                  <div className="bottom"></div>
                </div>
                <div className="lighter cloud-4">
                  <div className="top"></div>
                  <div className="middle"></div>
                  <div className="bottom"></div>
                </div>
                <div className="dark cloud-2">
                  <div className="top"></div>
                  <div className="middle"></div>
                  <div className="bottom"></div>
                </div>
              </div>
              <div className="moon-wrapper">
                <div className="moonlight moonlight-1">
                  <div className="moonlight moonlight-2">
                    <div className="moonlight moonlight-3">
                      <div className="moonlight moonlight-4">
                        <div className="moon">
                          <div className="shadow shadow-1"></div>
                          <div className="shadow shadow-2"></div>
                          <div className="shadow shadow-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bbcontainer">
          <div className="bbbase"></div>
          <div className="bbantenna"></div>
          <div className="bbtop-line"></div>
          <div className="bbtower">
            <div className="bbrails">
              <div className="r r1"></div>
            </div>
          </div>
          <div className="bbtop-base"></div>
          <div className="bbtower2">
            <div className="bbrails">
              <div className="r r1"></div>
              <div className="r r2"></div>
              <div className="r r3"></div>
              <div className="r r4"></div>
            </div>
          </div>
          <div className="bbclock">
            <div className="bbclock-band"></div>
            <div className="bbrails">
              <div className="r r1"></div>
              <div className="r r2"></div>
              <div className="r r3"></div>
            </div>
            <div className="bbclock-square">
              <div className="bbclock-circle">
                <div className="bbhour"></div>
                <div className="bbseconds"></div>
              </div>
            </div>
          </div>
          <div className="bbpillar">
            <div className="p1"></div>
            <div className="p-shadow p2"></div>
            <div className="p-shadow p3"></div>
            <div className="p-shadow p4"></div>

            <div className="pl1"></div>
            <div className="pl2"></div>

            <div className="pm1"></div>
            <div className="pm2"></div>
            <div className="pm3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigBenAnim;
