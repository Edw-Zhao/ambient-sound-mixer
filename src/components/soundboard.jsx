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
  { id: "Fire Place", src: FirePlacemp3, anim: <FirePlaceAnim /> },
  { id: "Rain", src: Rainmp3, anim: <RainAnim /> },
  { id: "Light Snow", src: LightSnowmp3, anim: <LightSnowAnim /> },
  { id: "Forest", src: Forestmp3, anim: <ForestAnim /> },
  { id: "Thunder", src: Thundermp3, anim: <ThunderAnim /> },
  { id: "Under Water", src: UnderWatermp3, anim: <UnderWaterAnim /> },
  { id: "Train", src: Trainmp3, anim: <TrainAnim /> },
  { id: "Scribbling", src: Scribblingmp3, anim: <ScribblingAnim /> },
  { id: "Gentle Breeze", src: GentleBreezemp3, anim: <GentleBreezeAnim /> },
  { id: "Crickets", src: Cricketsmp3, anim: <CricketsAnim /> },
];

class Soundboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireflynum: 25,
      muteall: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ fireflynum: e.target.value });
  }

  handleMute() {
    const currentMuteState = this.state.muteall;
    this.setState({ muteall: !currentMuteState });
  }

  handleDisable() {
    this.setState({ fireflynum: 0 });
  }

  render() {
    let buttons = effectBank.map((effect) => {
      return (
        <PlayButton
          source={effect.src}
          id={effect.id}
          key={effect.id}
          anim={effect.anim}
          muteall={this.state.muteall}
        />
      );
    });

    let fireflyquan = [];

    for (let i = 0; this.state.fireflynum > i; i++) {
      fireflyquan.push(<div className="firefly" key={i}></div>);
    }

    return (
      <div className="background-anim">
        <div className="soundboard shadow-inset-center">
          <div className="buttons">{buttons}</div>
          <div className="options">
            {fireflyquan}
            <input
              type="number"
              min="0"
              max="100"
              className="firefly-input"
              onChange={this.handleChange}
              placeholder="# of Fireflies"
            />
            <button className="disableFireflies" onClick={this.handleDisable} />
            <button className="mutebtn" onClick={this.handleMute} />
          </div>
        </div>
      </div>
    );
  }
}

export default Soundboard;
