import React, { Component } from "react";
import "./playbutton.css";
import "bootstrap/dist/css/bootstrap.css";
import "../animations/weather.css";

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
    this.handleEffects = this.handleEffects.bind(this);
    this.handleVolChange = this.handleVolChange.bind(this);
  }

  handleEffects() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });

    const sound = document.getElementById(this.props.id);
    if (this.state.active === true) {
      sound.play();
      sound.currentTime = 0;
    } else {
      sound.pause();
    }
  }

  handleVolChange(e) {
    const sound = document.getElementById(this.props.id);
    sound.volume = e.target.value / 100;
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className={
            this.state.active
              ? "playbuttonoff scale-out-center"
              : "playbuttonon scale-in-center"
          }
          onClick={this.handleEffects}
        >
          {this.props.id}
          <audio src={this.props.source} id={this.props.id} loop />
          {this.state.active ? null : this.props.anim}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className={
            this.state.active
              ? "slider slide-out-top"
              : "sliderlong scale-in-center slide-in-top"
          }
          id="vol"
          onChange={this.handleVolChange}
        />
      </div>
    );
  }
}

export default PlayButton;
