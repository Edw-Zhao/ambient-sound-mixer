import React, { Component } from "react";
import "./soundboard.css";
import PlayButton from "./playbutton";
import Waves from "../audio/Waves.mp3";
import BigBen from "../audio/BigBen.mp3";
import FirePlace from "../audio/FirePlace.mp3";
import "../animations/weather.css";
import "../animations/weather.min.css";
import "../animations/fireflies.sass";
import "bootstrap/dist/css/bootstrap.css";
import RainAnim from "../animations/rainanim";
import SnowAnim from "../animations/snowanim";
import WavesAnim from "../animations/wavesanim";
import FirePlaceAnim from "../animations/fireplaceanim";

const effectBank = [
  { id: "Waves", src: Waves, anim: <WavesAnim /> },
  { id: "BigBen", src: BigBen, anim: <SnowAnim /> },
  { id: "Fireplace", src: FirePlace, anim: <FirePlaceAnim /> },
];

class Soundboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireflynum: 25,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ fireflynum: e.target.value });
  }

  render() {
    let buttons = effectBank.map((effect) => {
      return (
        <PlayButton
          source={effect.src}
          id={effect.id}
          key={effect.id}
          anim={effect.anim}
        />
      );
    });

    let fireflyquan = [];

    for (let i = 0; this.state.fireflynum > i; i++) {
      fireflyquan.push(<div className="firefly" key={i}></div>);
    }

    return (
      <div className="background-anim weather">
        <div className="soundboard shadow-inset-center">{buttons}</div>
        {fireflyquan}
        <input
          type="number"
          min="0"
          max="100"
          className="firefly-input"
          onChange={this.handleChange}
          placeholder="# of Fireflies"
        />
      </div>
    );
  }
}

export default Soundboard;
