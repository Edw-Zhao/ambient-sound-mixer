import React, { Component } from "react";
import "./soundboard.css";
import PlayButton from "./playbutton";
import Waves from "../audio/Waves.mp3";
import BigBen from "../audio/BigBen.mp3";

const effectBank = [
  { id: "Waves", src: Waves },
  { id: "BigBen", src: BigBen },
];

class Soundboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let buttons = effectBank.map((effect) => {
      return <PlayButton source={effect.src} id={effect.id} key={effect.id} />;
    });
    return <div className="soundboard">{buttons}</div>;
  }
}

export default Soundboard;
