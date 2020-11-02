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
    const newProps = this.props;
    if (oldProps.muteall !== newProps.muteall) {
      this.setState({ inactive: true });
      sound.pause();
    }
  }

  handleEffects() {
    const currentState = this.state.inactive;
    this.setState({ inactive: !currentState });
    const sound = document.getElementById(this.props.id);
    if (this.state.inactive === true) {
      sound.play();
      sound.currentTime = 0;
    } else {
      sound.pause();
    }
  }

  handleVolChange(e) {
    const sound = document.getElementById(this.props.id);
    sound.volume = e.target.value / 100;
    console.log(sound.volume);
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className={
            this.state.inactive
              ? "playbuttonoff scale-out-center"
              : "playbuttonon scale-in-center"
          }
          onClick={this.handleEffects}
        >
          {this.props.id}
          <audio src={this.props.source} id={this.props.id} loop />
          {this.state.inactive ? null : this.props.anim}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className={
            this.state.inactive
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
