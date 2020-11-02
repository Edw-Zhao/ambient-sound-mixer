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

        <div class="bbcontainer">
          <div class="bbbase"></div>
          <div class="bbantenna"></div>
          <div class="bbtop-line"></div>
          <div class="bbtower">
            <div class="bbrails">
              <div class="r r1"></div>
            </div>
          </div>
          <div class="bbtop-base"></div>
          <div class="bbtower2">
            <div class="bbrails">
              <div class="r r1"></div>
              <div class="r r2"></div>
              <div class="r r3"></div>
              <div class="r r4"></div>
            </div>
          </div>
          <div class="bbclock">
            <div class="bbclock-band"></div>
            <div class="bbrails">
              <div class="r r1"></div>
              <div class="r r2"></div>
              <div class="r r3"></div>
            </div>
            <div class="bbclock-square">
              <div class="bbclock-circle">
                <div class="bbhour"></div>
                <div class="bbseconds"></div>
              </div>
            </div>
          </div>
          <div class="bbpillar">
            <div class="p1"></div>
            <div class="p-shadow p2"></div>
            <div class="p-shadow p3"></div>
            <div class="p-shadow p4"></div>

            <div class="pl1"></div>
            <div class="pl2"></div>

            <div class="pm1"></div>
            <div class="pm2"></div>
            <div class="pm3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigBenAnim;
