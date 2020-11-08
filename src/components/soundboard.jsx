import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import "./soundboard.css";
import PlayButton from "./playbutton";
import Wavesmp3 from "../audio/Waves.mp3";
import BigBenmp3 from "../audio/BigBen.mp3";
import FirePlacemp3 from "../audio/FirePlace.mp3";
import Rainmp3 from "../audio/Rain.mp3";
import LightSnowmp3 from "../audio/LightSnow.mp3";
import Forestmp3 from "../audio/Forest.mp3";
import Thundermp3 from "../audio/Thunder.mp3";
import UnderWatermp3 from "../audio/UnderWater.mp3";
import Trainmp3 from "../audio/Train.mp3";
import GentleBreezemp3 from "../audio/GentleBreeze.mp3";
import Scribblingmp3 from "../audio/Scribbling.mp3";
import Cricketsmp3 from "../audio/Crickets.mp3";
import "../animations/fireflies/fireflies.sass";
import RainAnim from "../animations/rainanim/rainanim";
import WavesAnim from "../animations/wavesanim/wavesanim";
import FirePlaceAnim from "../animations/fireplaceanim/fireplaceanim";
import LightSnowAnim from "../animations/lightsnowanim/lightsnowanim";
import ForestAnim from "../animations/forestanim/forestanim";
import ThunderAnim from "../animations/thunderanim/thunderanim";
import UnderWaterAnim from "../animations/underwateranim/underwateranim";
import TrainAnim from "../animations/trainanim/trainanim";
import ScribblingAnim from "../animations/scribblinganim/scribblinganim";
import BigBenAnim from "../animations/bigbenanim/bigbenanim";
import GentleBreezeAnim from "../animations/gentlebreezeanim/gentlebreezeanim";
import CricketsAnim from "../animations/cricketsanim/cricketsanim";

const effectBank = [
  { id: "Waves", src: Wavesmp3, anim: <WavesAnim /> },
  { id: "Big Ben", src: BigBenmp3, anim: <BigBenAnim /> },
  { id: "Fire Place", src: FirePlacemp3, anim: <FirePlaceAnim /> },
  { id: "Rain", src: Rainmp3, anim: <RainAnim /> },
  { id: "Light Snow", src: LightSnowmp3, anim: <LightSnowAnim /> },
  { id: "Forest", src: Forestmp3, anim: <ForestAnim /> },
  { id: "Thunder", src: Thundermp3, anim: <ThunderAnim /> },
  { id: "Under Water", src: UnderWatermp3, anim: <UnderWaterAnim /> },
  { id: "Train", src: Trainmp3, anim: <TrainAnim /> },
  { id: "Scribbling", src: Scribblingmp3, anim: <ScribblingAnim /> },
  { id: "Gentle Breeze", src: GentleBreezemp3, anim: <GentleBreezeAnim /> },
  { id: "Crickets", src: Cricketsmp3, anim: <CricketsAnim /> },
];

class Soundboard extends Component {
  intervalID = 0;
  constructor(props) {
    super(props);
    this.state = {
      fireFlyNum: 25,
      toggleOnOff: true,
      toggleReset: false,
      timerActive: false,
      minutes: 6,
      seconds: 0,
      infoActive: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleTimerChangeMinutes = this.handleTimerChangeMinutes.bind(this);
    this.handleTimerChangeSeconds = this.handleTimerChangeSeconds.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handlePlusOneOff = this.handlePlusOneOff.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleMinusOneOff = this.handleMinusOneOff.bind(this);
    this.handleOnOff = this.handleOnOff.bind(this);
  }

  handleOnOff() {
    const currentOnOffState = this.state.toggleOnOff;
    this.setState({ toggleOnOff: !currentOnOffState });
  }

  handleChange(e) {
    if (e.target.value >= 0 && e.target.value <= 99) {
      this.setState({ fireFlyNum: e.target.value });
    }
    if (e.target.value < 0) {
      this.setState({ fireFlyNum: 0 });
    }
    if (e.target.value > 100) {
      this.setState({ fireFlyNum: 99 });
    }
  }

  handleMute() {
    const currentMuteState = this.state.toggleReset;
    this.setState({ toggleReset: !currentMuteState });
  }

  handleDisable() {
    this.setState({ fireFlyNum: 0 });
  }

  handlePlusOne() {
    const addone = () => {
      if (this.state.fireFlyNum < 99) {
        let plusone = this.state.fireFlyNum;
        plusone = plusone + 1;
        this.setState({ fireFlyNum: plusone });
      }
    };

    addone();
    this.buttonPressTimer = setInterval(() => {
      addone();
    }, 110);
  }

  handlePlusOneOff() {
    clearInterval(this.buttonPressTimer);
  }

  handleMinusOne() {
    const subone = () => {
      if (this.state.fireFlyNum > 0) {
        let minusone = this.state.fireFlyNum;
        minusone = minusone - 1;
        this.setState({ fireFlyNum: minusone });
      }
    };

    subone();
    this.buttonPressTimer = setInterval(() => {
      subone();
    }, 110);
  }

  handleMinusOneOff() {
    clearInterval(this.buttonPressTimer);
  }

  handleTimerChangeMinutes(e) {
    if (this.state.timerActive === false) {
      this.setState({ minutes: e.target.value });
    }
  }

  handleTimerChangeSeconds(e) {
    if (this.state.timerActive === false) {
      this.setState({ seconds: e.target.value });
    }
  }

  handleTimer() {
    // Start at any time thats not 00:00 //
    if (
      (this.state.timerActive === false &&
        this.state.minutes != 0 &&
        this.state.seconds == 0) ||
      (this.state.timerActive === false &&
        this.state.minutes == 0 &&
        this.state.seconds != 0) ||
      (this.state.timerActive === false &&
        this.state.minutes != 0 &&
        this.state.seconds != 0)
    ) {
      this.setState({ timerActive: true });
      const minutes = this.state.minutes;
      const seconds = this.state.seconds;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
      this.intervalID = setInterval(() => {
        const minutes = this.state.minutes;
        const seconds = this.state.seconds;
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1,
          }));
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.myInterval);
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59,
            }));
          }
        }
      }, 1000);
    }
    // Pause the timer if it is active //
    if (this.state.timerActive === true) {
      this.setState({ timerActive: false });
      clearInterval(this.intervalID);
      const minutes = this.state.minutes;
      const seconds = this.state.seconds;
      this.setState({ minutes: minutes, seconds: seconds });
    }
  }

  componentDidUpdate(nextProps, nextState) {
    if (
      nextState.minutes == 0 &&
      nextState.seconds == 0 &&
      this.state.timerActive === true
    ) {
      clearInterval(this.intervalID);
      this.setState({ timerActive: false, minutes: 5, seconds: 0 });
      this.handleMute();
    }
  }

  handleInfo() {
    const currentInfoState = this.state.infoActive;
    this.setState({ infoActive: !currentInfoState });
  }

  render() {
    let buttons = effectBank.map((effect) => {
      return (
        <PlayButton
          source={effect.src}
          id={effect.id}
          key={effect.id}
          anim={effect.anim}
          toggleReset={this.state.toggleReset}
          toggleOnOff={this.state.toggleOnOff}
        />
      );
    });

    let fireflyquan = [];

    for (let i = 0; this.state.fireFlyNum > i; i++) {
      fireflyquan.push(<div className="firefly" key={i}></div>);
    }

    return (
      <main>
        <div className="background-anim">
          {fireflyquan}
          <div
            className={
              this.state.infoActive === true
                ? "shadow-inset-center soundboard-blur"
                : "shadow-inset-center soundboard"
            }
          >
            <div className="buttons">{buttons}</div>
            <div className="options">
              <div className="powerswitch-wrapper">
                <div className="powerswitch" id="_3rd-toggle-btn">
                  <input type="checkbox" onClick={this.handleOnOff} />
                  <span></span>
                </div>
              </div>

              <div className="fireflieswrapper">
                <p className="fireflieslabel">#Fireflies: </p>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="firefly-input"
                  onChange={this.handleChange}
                  value={this.state.fireFlyNum}
                />
                <div className="counter-wrapper">
                  <button
                    className="counter-button"
                    onMouseDown={this.handlePlusOne}
                    onMouseUp={this.handlePlusOneOff}
                    onMouseLeave={this.handlePlusOneOff}
                  >
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </button>
                  <button
                    className="counter-button"
                    onMouseDown={this.handleMinusOne}
                    onMouseUp={this.handleMinusOneOff}
                    onMouseLeave={this.handleMinusOneOff}
                  >
                    <FontAwesomeIcon icon={faMinusSquare} />
                  </button>
                </div>
                <button
                  className="disable-fireflies"
                  onClick={this.handleDisable}
                >
                  <FontAwesomeIcon icon={faBan} />
                </button>
              </div>
              <button className="mutebtn" onClick={this.handleMute} />
              <input
                className="timer"
                type="number"
                value={this.state.minutes}
                onChange={this.handleTimerChangeMinutes}
              />
              <input
                className="timer"
                type="number"
                value={this.state.seconds}
                onChange={this.handleTimerChangeSeconds}
              />
              <button className="timerStartBtn" onClick={this.handleTimer} />
              <button className="InfoBtn" onClick={this.handleInfo} />
            </div>
          </div>
          <Modal
            className="info fadeIn"
            overlayClassName="infooverlay"
            isOpen={this.state.infoActive}
          >
            <div className="info-exit-outer" onClick={this.handleInfo}>
              <div className="info-exit-inner">
                <label>Back</label>
              </div>
            </div>
          </Modal>
        </div>
      </main>
    );
  }
}

export default Soundboard;
