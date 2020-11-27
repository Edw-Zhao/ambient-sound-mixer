import React, { Component } from "react";
import "./playbutton.css";

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inactive: true,
    };
    this.handleEffects = this.handleEffects.bind(this);
    this.handleVolChange = this.handleVolChange.bind(this);
  }

  componentDidUpdate(oldProps) {
    const sound = document.getElementById(this.props.id);
    if (this.props.toggleOnOff === false) {
      sound.pause();
    }
    if (this.props.toggleOnOff === true && this.state.inactive === false) {
      sound.play();
    }
    if (oldProps.toggleReset !== this.props.toggleReset) {
      this.setState({ inactive: true });
      sound.pause();
    }
  }

  handleEffects() {
    const currentState = this.state.inactive;
    if (this.props.toggleOnOff === true) {
      this.setState({ inactive: !currentState });
    }
    const sound = document.getElementById(this.props.id);
    if (this.state.inactive === true && this.props.toggleOnOff === true) {
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
            this.props.toggleOnOff
              ? this.state.inactive
                ? "playbuttonoff scale-out-center"
                : "playbuttonon scale-in-center"
              : "playbuttonoff scale-out-center"
          }
          onClick={this.handleEffects}
        >
          {this.props.id}
          <audio src={this.props.source} id={this.props.id} loop />
          {this.props.toggleOnOff
            ? this.state.inactive
              ? null
              : this.props.anim
            : null}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className={
            this.props.toggleOnOff
              ? this.state.inactive
                ? "slider slide-out-top"
                : "sliderlong scale-in-center slide-in-top"
              : "slider slide-out-top"
          }
          id="vol"
          onChange={this.handleVolChange}
        />
      </div>
    );
  }
}

export default PlayButton;
