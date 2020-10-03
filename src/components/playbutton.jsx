import React, { Component } from "react";
import "./playbutton.css";
import "bootstrap/dist/css/bootstrap.css";

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
    //console.log(document.getElementById("vol").value);
    //console.log(document.getElementById(this.props.id));
    //console.log(this.state.volume);
    if (this.state.active === true) {
      sound.play();
      sound.currentTime = 0;
    } else {
      sound.pause();
    }
    if (this.state.active === true) {

    }
  }

  handleVolChange(e) {
    const sound = document.getElementById(this.props.id);
    sound.volume = e.target.value / 100;
  }

  render() {
    return (
      <div className="wrapper">
        <div className={this.state.active ? 'playbuttonon' : 'playbuttonoff'} onClick={this.handleEffects}>
          <p>{this.props.id}</p>
          <audio src={this.props.source} id={this.props.id} loop />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          id="vol"
          onChange={this.handleVolChange}
        />
      </div>
    );
  }
}

export default PlayButton;
