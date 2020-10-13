import React, { Component } from "react";
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
import "../animations/fireflies.sass";
import "bootstrap/dist/css/bootstrap.css";
import RainAnim from "../animations/rainanim";
import WavesAnim from "../animations/wavesanim";
import FirePlaceAnim from "../animations/fireplaceanim";
import FirePlaceAnim2 from "../animations/fireplaceanim2";
import LightSnowAnim from "../animations/lightsnowanim";
import ForestAnim from "../animations/forestanim";
import ThunderAnim from "../animations/thunderanim";
import UnderWaterAnim from "../animations/underwateranim";
import TrainAnim from "../animations/trainanim";
import ScribblingAnim from "../animations/scribblinganim";
import BigBenAnim from "../animations/bigbenanim"

const effectBank = [
  { id: "Waves", src: Wavesmp3, anim: <WavesAnim /> },
  { id: "BigBen", src: BigBenmp3, anim: <BigBenAnim /> },
  { id: "Fireplace2", src: FirePlacemp3, anim: <FirePlaceAnim2 /> },
  { id: "Rain", src: Rainmp3, anim: <RainAnim /> },
  { id: "Light Snow", src: LightSnowmp3, anim: <LightSnowAnim /> },
  { id: "Forest", src: Forestmp3, anim: <ForestAnim /> },
  { id: "Thunder", src: Thundermp3, anim: <ThunderAnim /> },
  { id: "UnderWater", src: UnderWatermp3, anim: <UnderWaterAnim /> },
  { id: "Train", src: Trainmp3, anim: <TrainAnim /> },
  { id: "Fireplace", src: FirePlacemp3, anim: <ScribblingAnim /> },
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
