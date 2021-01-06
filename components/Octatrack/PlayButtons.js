import styled from "styled-components";

export default function PlayButtons({ selection, change }) {
  return (
    <>
      <Play
        selected={selection.indexOf(48) !== -1}
        onClick={() => {
          change(48);
        }}
        d="M254.54166,209.49803h-21.41672c-1.87863,0-3.40157-1.52293-3.40157-3.40158v-11.15497
        c0-1.87865,1.52293-3.40158,3.40157-3.40158h21.41672c1.87863,0,3.40158,1.52293,3.40158,3.40158v11.15497
        C257.94324,207.9751,256.42029,209.49803,254.54166,209.49803z"
      />
      <Pause
        selected={selection.indexOf(49) !== -1}
        onClick={() => {
          change(49);
        }}
        d="M285.15356,209.49803h-21.41672c-1.87863,0-3.40155-1.52293-3.40155-3.40158v-11.15497
        c0-1.87863,1.52292-3.40157,3.40155-3.40157h21.41672c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15497
        C288.55515,207.9751,287.0322,209.49803,285.15356,209.49803z"
      />
      <Stop
        selected={selection.indexOf(50) !== -1}
        onClick={() => {
          change(50);
        }}
        d="M315.75565,209.49803h-21.41672c-1.87863,0-3.40158-1.52293-3.40158-3.40158v-11.15497
        c0-1.87863,1.52295-3.40157,3.40158-3.40157h21.41672c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15497
        C319.15723,207.9751,317.63428,209.49803,315.75565,209.49803z"
      />
    </>
  );
}
const Play = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;

const Pause = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;

const Stop = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;
