import styled from "styled-components";

import Encoders from "./Encoders";
import VolumeButton from "./VolumeButton";
import StepButtons from "./StepButtons";
import RecordButtons from "./RecordButtons";
import PlayButtons from "./PlayButtons";
import Fader from "./Fader";
import Arrows from "./Arrows";
import MenuButtons from "./MenuButtons";
import TrackButtons from "./TrackButtons";
import TrackPages from "./TrackPages";
import YesNo from "./YesNo";

const SVG = styled.svg`
  width: 400px;
  height: auto;
  & path {
    transition: ease-in-out 0.1s;
  }
`;

const Frame = styled.path`
  fill: #5e5f5e;
`;

const Tempo = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;

const FunctionButton = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "blue" : "#989898")};
`;

const TrackLength = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;

const Screen = styled.path``;

export default function MachineDrawing({ selection, onChange }) {
  const handleChange = (value) => {
    let toReturnTab = [...selection];
    let theIndex = selection.indexOf(value);
    if (theIndex === -1) {
      toReturnTab.push(value);
    } else {
      toReturnTab.splice(theIndex, 1);
    }
    onChange(toReturnTab);
  };

  return (
    <SVG
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 547.60193 283.46457"
      style={{ enableBackground: "new 0 0 547.60193 283.46457" }}
      xmlSpace="preserve"
    >
      <Frame
        className="st0"
        d="M545.04395,283.46457H2.55799C1.14525,283.46457,0,282.31931,0,280.90659V2.55799
        C0,1.14525,1.14525,0,2.55799,0h542.48596c1.41272,0,2.55798,1.14525,2.55798,2.55799v278.3486
        C547.60193,282.31931,546.45667,283.46457,545.04395,283.46457z"
      />
      <Encoders selection={selection} change={handleChange} />
      <VolumeButton selection={selection} change={handleChange} />
      <StepButtons selection={selection} change={handleChange} />
      <RecordButtons selection={selection} change={handleChange} />
      <PlayButtons selection={selection} change={handleChange} />
      <Screen d="M318.28033,53.86609v-7.65038H199.90167v7.65038h-0.00101v81.73863h118.38068V53.86609H318.28033z" />
      <FunctionButton
        selected={selection.indexOf(0) !== -1}
        onClick={() => {
          handleChange(0);
        }}
        className="st1"
        d="M40.32027,170.8438H18.90356c-1.87864,0-3.40157-1.52295-3.40157-3.40158v-11.15497
        c0-1.87865,1.52294-3.40158,3.40157-3.40158h21.41671c1.87864,0,3.40157,1.52293,3.40157,3.40158v11.15497
        C43.72185,169.32085,42.19891,170.8438,40.32027,170.8438z"
      />
      <Fader selection={selection} change={handleChange} />
      <Arrows selection={selection} change={handleChange} />
      <MenuButtons selection={selection} change={handleChange} />
      <TrackButtons selection={selection} change={handleChange} />
      <TrackPages selection={selection} change={handleChange} />
      <YesNo selection={selection} change={handleChange} />
      <Tempo
        selected={selection.indexOf(51) !== -1}
        onClick={() => {
          handleChange(51);
        }}
        d="M397.99872,121.72066h-11.15497c-1.87866,0-3.40158-1.52294-3.40158-3.40158v-11.15497
       c0-1.87864,1.52292-3.40157,3.40158-3.40157h11.15497c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15497
       C401.4003,120.19772,399.87735,121.72066,397.99872,121.72066z"
      />
      <TrackLength
        selected={selection.indexOf(52) !== -1}
        onClick={() => {
          handleChange(52);
        }}
        d="M529.96545,251.37347h-21.41672c-1.87863,0-3.40158-1.52293-3.40158-3.40157v-11.15498
        c0-1.87865,1.52295-3.40158,3.40158-3.40158h21.41672c1.87866,0,3.40161,1.52293,3.40161,3.40158v11.15498
        C533.36707,249.85054,531.84412,251.37347,529.96545,251.37347z"
      />
    </SVG>
  );
}
