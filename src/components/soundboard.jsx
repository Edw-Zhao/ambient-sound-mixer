import React, { PureComponent } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
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
  {
    id: "Fire Place",
    src: FirePlacemp3,
    anim: <FirePlaceAnim />,
  },
  { id: "Rain", src: Rainmp3, anim: <RainAnim /> },
  {
    id: "Light Snow",
    src: LightSnowmp3,
    anim: <LightSnowAnim />,
  },
  { id: "Forest", src: Forestmp3, anim: <ForestAnim /> },
  { id: "Thunder", src: Thundermp3, anim: <ThunderAnim /> },
  {
    id: "Under Water",
    src: UnderWatermp3,
    anim: <UnderWaterAnim />,
  },
  { id: "Train", src: Trainmp3, anim: <TrainAnim /> },
  {
    id: "Scribbling",
    src: Scribblingmp3,
    anim: <ScribblingAnim />,
  },
  {
    id: "Gentle Breeze",
    src: GentleBreezemp3,
    anim: <GentleBreezeAnim />,
  },
  {
    id: "Crickets",
    src: Cricketsmp3,
    anim: <CricketsAnim />,
  },
];

class Soundboard extends PureComponent {
  intervalID = 0;
  constructor(props) {
    super(props);
    this.state = {
      fireFlyNum: 15,
      toggleOnOff: true,
      toggleReset: false,
      timerActive: false,
      timerWasActive: false,
      minutes: 5,
      seconds: 0,
      infoActive: false,
      toggleEmail: false,
    };
    this.playRef1 = React.createRef();
    this.playRef2 = React.createRef();
    this.playRef3 = React.createRef();
    this.playRef4 = React.createRef();
    this.playRef5 = React.createRef();
    this.playRef6 = React.createRef();
    this.playRef7 = React.createRef();
    this.playRef8 = React.createRef();
    this.playRef9 = React.createRef();
    this.playRef10 = React.createRef();
    this.playRef11 = React.createRef();
    this.playRef12 = React.createRef();
    this.minutesRef = React.createRef();
    this.secondsRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
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
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleOnOff() {
    if (this.state.toggleOnOff === true) {
      if (this.state.timerActive === true) {
        this.setState({ timerActive: false, timerWasActive: true });
        clearInterval(this.intervalID);
      } else {
        this.setState({ timerWasActive: false });
      }
    }
    if (this.state.toggleOnOff === false) {
      if (this.state.timerWasActive === true) {
        this.handleTimer();
      }
    }
    this.setState({ toggleOnOff: !this.state.toggleOnOff });
    this.playRef1.current.onOff();
    this.playRef2.current.onOff();
    this.playRef3.current.onOff();
    this.playRef4.current.onOff();
    this.playRef5.current.onOff();
    this.playRef6.current.onOff();
    this.playRef7.current.onOff();
    this.playRef8.current.onOff();
    this.playRef9.current.onOff();
    this.playRef10.current.onOff();
    this.playRef11.current.onOff();
    this.playRef12.current.onOff();
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

  handleResetAll() {
    this.playRef1.current.reset();
    this.playRef2.current.reset();
    this.playRef3.current.reset();
    this.playRef4.current.reset();
    this.playRef5.current.reset();
    this.playRef6.current.reset();
    this.playRef7.current.reset();
    this.playRef8.current.reset();
    this.playRef9.current.reset();
    this.playRef10.current.reset();
    this.playRef11.current.reset();
    this.playRef12.current.reset();
    clearInterval(this.intervalID);

    this.setState({
      toggleReset: !this.state.toggleReset,
      fireFlyNum: 15,
      minutes: 5,
      seconds: 0,
      timerActive: false,
    });
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
    if (
      (e.target.value >= 0 &&
        e.target.value <= 59 &&
        document.activeElement.value.length > 2) ||
      (e.target.value >= 0 && e.target.value <= 9 && e.target.value.length > 1)
    ) {
      let cutZeros = e.target.value;
      while (cutZeros.charAt(0) === "0") {
        cutZeros = cutZeros.substring(1);
        this.minutesRef.current.value = cutZeros;
      }
    }
    if (this.state.timerActive === false) {
      if (e.target.value < 59 && e.target.value >= 0) {
        this.setState({ minutes: e.target.value });
      }
      if (e.target.value >= 60) {
        this.setState({ minutes: 59 });
      }
      if (e.target.value < 0 || e.target.value.length === 0) {
        this.setState({ minutes: 0 });
      }
    }
  }

  handleTimerChangeSeconds(e) {
    if (
      (e.target.value >= 0 &&
        e.target.value <= 59 &&
        document.activeElement.value.length > 2) ||
      (e.target.value >= 0 && e.target.value <= 9 && e.target.value.length > 1)
    ) {
      let cutZeros = e.target.value;
      while (cutZeros.charAt(0) === "0") {
        cutZeros = cutZeros.substring(1);
        this.secondsRef.current.value = cutZeros;
      }
    }
    if (this.state.timerActive === false) {
      if (e.target.value < 59 && e.target.value >= 0) {
        this.setState({ seconds: e.target.value });
      }
      if (e.target.value >= 60) {
        this.setState({ seconds: 59 });
      }
      if (e.target.value < 0 || e.target.value.length === 0) {
        this.setState({ seconds: 0 });
      }
    }
  }

  handleTimer() {
    const minutes = Number(this.state.minutes);
    const seconds = Number(this.state.seconds);
    this.setState({ minutes: minutes, seconds: seconds });
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
      this.setState({ timerActive: true, timerWasActive: true });

      let timerFunc = () => {
        const minutes = this.state.minutes;
        const seconds = this.state.seconds;
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1,
          }));
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.intervalID);
            this.setState({
              timerActive: false,
              hours: 0,
              minutes: 5,
              seconds: 0,
            });
            this.playRef1.current.reset();
            this.playRef2.current.reset();
            this.playRef3.current.reset();
            this.playRef4.current.reset();
            this.playRef5.current.reset();
            this.playRef6.current.reset();
            this.playRef7.current.reset();
            this.playRef8.current.reset();
            this.playRef9.current.reset();
            this.playRef10.current.reset();
            this.playRef11.current.reset();
            this.playRef12.current.reset();
            this.setState({
              toggleReset: !this.state.toggleReset,
            });
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59,
            }));
          }
        }
      };

      timerFunc();

      this.intervalID = setInterval(() => {
        timerFunc();
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

  handleInfo() {
    const currentInfoState = this.state.infoActive;
    this.setState({ infoActive: !currentInfoState });
  }

  handleEmail() {
    const currentEmailState = this.state.toggleEmail;
    this.setState({ toggleEmail: !currentEmailState });
  }

  render() {
    let i = 0;
    let buttons = effectBank.map((effect) => {
      i++;
      return (
        <PlayButton
          source={effect.src}
          id={effect.id}
          key={effect.id}
          anim={effect.anim}
          toggleReset={this.state.toggleReset}
          toggleOnOff={this.state.toggleOnOff}
          ref={this[`playRef${i}`]}
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
            <h1
              className={
                this.state.toggleOnOff
                  ? "soundboard-title-on"
                  : "soundboard-title-off"
              }
            >
              ~ AMBIENT SOUND MIXER ~
            </h1>
            <div className="buttons-wrapper">{buttons}</div>
            <div className="options">
              <div className="powerswitch-wrapper">
                <div className="powerswitch" id="_3rd-toggle-btn">
                  <input type="checkbox" onClick={this.handleOnOff} />
                  <span></span>
                </div>
              </div>

              <div className="fireflieswrapper">
                <p className="fireflieslabel"># Fireflies: </p>
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
              <button className="mutebtn" onClick={this.handleResetAll}>
                <FontAwesomeIcon icon={faRedo} />
              </button>
              <div className="timer-wrapper">
                <div className="clock-wrapper">
                  <input
                    className="timer"
                    onChange={this.handleTimerChangeMinutes}
                    ref={this.minutesRef}
                    type="number"
                    value={
                      this.state.minutes < 10
                        ? `0${this.state.minutes}`
                        : this.state.minutes
                    }
                  />
                  <p className="colon">:</p>
                  <input
                    className="timer"
                    ref={this.secondsRef}
                    onChange={this.handleTimerChangeSeconds}
                    value={
                      this.state.seconds < 10
                        ? `0${this.state.seconds}`
                        : this.state.seconds
                    }
                  />
                </div>
                <button className="timer-start" onClick={this.handleTimer}>
                  {this.state.timerActive ? (
                    <FontAwesomeIcon icon={faPause} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                </button>
              </div>
              <button className="info-button" onClick={this.handleInfo}>
                INFO
              </button>
            </div>
          </div>
          <Modal
            className="info fadeIn"
            overlayClassName="infooverlay"
            isOpen={this.state.infoActive}
          >
            <div className="header-bar">
              <IconContext.Provider value={{ className: "contact-details" }}>
                <a
                  href="https://github.com/Edw-Zhao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "contact-details" }}>
                <a
                  href="https://www.linkedin.com/in/edward-lu-zhao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "contact-details" }}>
                <div onClick={this.handleEmail}>
                  <FaEnvelopeSquare />
                </div>
              </IconContext.Provider>
              {this.state.toggleEmail ? (
                <p className="email">Edward.Zhao@dal.ca</p>
              ) : null}
              <div className="info-exit-outer" onClick={this.handleInfo}>
                <div className="info-exit-inner">
                  <label className="info-exit-label">Back</label>
                </div>
              </div>
            </div>
            <h2 className="subheadings">About This Project/Me:</h2>
            <p className="introduction">
              This app allows users to create their desired musical setting by
              mixing the volumes of their chosen soundtracks. This project was a
              familiarization vehicle for me to learn and practice React in my
              chase to launch a career in web development. This was also my
              first sizeable coding project that required time and dedication,
              of which I had the thrill of experimenting with audio, animations
              and general React functionalities. To see my other projects or for
              my contact details, please click the icons on top-left part of
              this window.
            </p>
            <h2 className="subheadings">Functionalities: </h2>
            <p className="functionalities">
              Click on one of the white squares to play its corresponding
              soundtrack and adjust its volume with the slider below the square.
              To stop the soundtrack, click on the square again. From left to
              right, the functionalities on the bottom are as follows:
            </p>
            <ul className="functionalities-list">
              <li>
                Power Switch: Pauses all active soundtracks and if active, the
                timer. Retains the memory of active soundtracks and will resume
                when the power switch is turned back on (as will the timer if it
                was active).
              </li>
              <li>
                Fireflies – Input: Controls the amount of fireflies on the
                screen (0 - 100), can be directly changed by typing a new number
                in or by using the plus/minus counter buttons. The red cancel
                button will set the amount of fireflies to zero.
              </li>
              <li>
                Reset All: Resets all settings to the initial settings and turns
                all active soundtracks off.
              </li>
              <li>
                Timer: Follows a MM:SS format. Can be directly changed by typing
                the values in. Hit the play button to start the timer, and the
                same button to pause the timer. When the timer ends, all active
                soundtracks will be turned off.
              </li>
            </ul>
            <h2 className="subheadings">Animation Source Codes: </h2>
            <p className="references">
              I would not have been able to fulfill my vision of this project
              without the existing animation projects that were available to me,
              Below are the CodePen/GitHub for the source code of the
              animations. Animations not listed were made by me, with stock
              images from pngfuel.com:
            </p>
            <div className="refs-wrapper">
              <a
                className="anim-refs"
                href="https://codepen.io/mikegolus/pen/Jegvym"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Fireflies
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/tedmcdo/pen/PqxKXg"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Waves
              </a>
              <a
                className="anim-refs"
                href="https://github.com/moqmar/weather.css?files=1"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Rain + Light Snow
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/aybukeceylan/pen/OJJzXde"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Big Ben - Sky
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/shahidshaikhs/pen/ZEbagRq"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Big Ben - Tower
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/ajerez/pen/EaEEOW"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Under Water
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/miffili/pen/KrKLdO"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Gentle Breeze
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/short/pen/gGWbQB"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Fire Place
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/thelittleblacksmith/pen/jVLdEz"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Train
              </a>
              <a
                className="anim-refs"
                href="https://codepen.io/knyttneve/pen/wxOjJP"
                target="_blank"
                rel="noopener noreferrer"
                color="red"
              >
                Crickets
              </a>
            </div>
          </Modal>
        </div>
      </main>
    );
  }
}

export default Soundboard;
