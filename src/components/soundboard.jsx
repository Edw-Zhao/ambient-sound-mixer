import React, { Component } from "react";
import "./soundboard.css";
import PlayButton from "./playbutton";
import Wavesmp3 from "../audio/Waves.mp3";
import BigBenmp3 from "../audio/BigBen.mp3";
import FirePlacemp3 from "../audio/FirePlace.mp3";
import Rainmp3 from "../audio/Rain.mp3";
import "../animations/fireflies.sass";
import "bootstrap/dist/css/bootstrap.css";
import RainAnim from "../animations/rainanim";
import SnowAnim from "../animations/snowanim";
import WavesAnim from "../animations/wavesanim";
import FirePlaceAnim from "../animations/fireplaceanim";

const effectBank = [
  { id: "Waves", src: Wavesmp3, anim: <WavesAnim /> },
  { id: "BigBen", src: BigBenmp3, anim: <SnowAnim /> },
  { id: "Fireplace", src: FirePlacemp3, anim: <FirePlaceAnim /> },
  { id: "Rain", src: Rainmp3, anim: <RainAnim /> },
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
      <div className="background-anim">
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
