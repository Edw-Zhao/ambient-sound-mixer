import React, { Component } from "react";
import "./soundboard.css";
import PlayButton from "./playbutton";
import Waves from "../audio/Waves.mp3";
import BigBen from "../audio/BigBen.mp3";
import "../weather.css";
import "../weather.min.css";

const effectBank = [
  { id: "Waves", src: Waves },
  { id: "BigBen", src: BigBen },
];

class Soundboard extends Component {
  constructor(props) {
    super(props);
    this.state = {classes: 'background-anim'};
  }
  render() {
    let buttons = effectBank.map((effect) => {
      return <PlayButton source={effect.src} id={effect.id} key={effect.id} />;
    });
    return (
      <div className={this.state.classes}>
        <div className="soundboard">{buttons}</div>
      </div>
    );
  }
}

export default Soundboard;
