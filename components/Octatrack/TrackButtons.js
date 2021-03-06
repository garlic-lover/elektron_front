import styled from "styled-components";

export default function TrackButtons({ selection, change }) {
  return (
    <>
      <Track
        selected={selection.indexOf(31) !== -1}
        onClick={() => {
          change(31);
        }}
        d="M183.10681,61.32338h-11.15497c-1.87863,0-3.40157-1.52293-3.40157-3.40157V46.76684
  c0-1.87864,1.52293-3.40158,3.40157-3.40158h11.15497c1.87865,0,3.40158,1.52294,3.40158,3.40158v11.15497
  C186.50839,59.80045,184.98546,61.32338,183.10681,61.32338z"
      />
      <Track
        selected={selection.indexOf(32) !== -1}
        onClick={() => {
          change(32);
        }}
        d="M183.10683,87.0929h-11.15498c-1.87863,0-3.40157-1.52293-3.40157-3.40157V72.53636
        c0-1.87864,1.52293-3.40158,3.40157-3.40158h11.15498c1.87863,0,3.40157,1.52294,3.40157,3.40158v11.15497
        C186.50839,85.56997,184.98546,87.0929,183.10683,87.0929z"
      />
      <Track
        selected={selection.indexOf(33) !== -1}
        onClick={() => {
          change(33);
        }}
        d="M183.10683,112.86242h-11.15498c-1.87863,0-3.40157-1.52294-3.40157-3.40158V98.30586
        c0-1.87864,1.52293-3.40157,3.40157-3.40157h11.15498c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15498
        C186.50841,111.33948,184.98546,112.86242,183.10683,112.86242z"
      />
      <Track
        selected={selection.indexOf(34) !== -1}
        onClick={() => {
          change(34);
        }}
        d="M183.10683,138.63191h-11.15498c-1.87863,0-3.40157-1.52293-3.40157-3.40157v-11.15498
        c0-1.87864,1.52293-3.40157,3.40157-3.40157h11.15498c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15498
        C186.50841,137.10898,184.98546,138.63191,183.10683,138.63191z"
      />
      <Track
        selected={selection.indexOf(35) !== -1}
        onClick={() => {
          change(35);
        }}
        d="M346.34613,61.32339h-11.155c-1.87863,0-3.40158-1.52293-3.40158-3.40157V46.76684
        c0-1.87864,1.52295-3.40158,3.40158-3.40158h11.155c1.87863,0,3.40155,1.52294,3.40155,3.40158v11.15498
        C349.74768,59.80046,348.22476,61.32339,346.34613,61.32339z"
      />
      <Track
        selected={selection.indexOf(36) !== -1}
        onClick={() => {
          change(36);
        }}
        d="M346.34613,87.09291h-11.15497c-1.87863,0-3.40158-1.52293-3.40158-3.40157V72.53636
        c0-1.87864,1.52295-3.40157,3.40158-3.40157h11.15497c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15498
        C349.74771,85.56998,348.22476,87.09291,346.34613,87.09291z"
      />
      <Track
        selected={selection.indexOf(37) !== -1}
        onClick={() => {
          change(37);
        }}
        d="M346.34613,112.8624h-11.15497c-1.87866,0-3.40158-1.52294-3.40158-3.40158V98.30585
        c0-1.87864,1.52292-3.40157,3.40158-3.40157h11.15497c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15497
        C349.74771,111.33946,348.22476,112.8624,346.34613,112.8624z"
      />
      <Track
        selected={selection.indexOf(38) !== -1}
        onClick={() => {
          change(38);
        }}
        d="M346.34613,138.6319h-11.15497c-1.87866,0-3.40158-1.52293-3.40158-3.40157v-11.15498
        c0-1.87864,1.52292-3.40157,3.40158-3.40157h11.15497c1.87863,0,3.40158,1.52293,3.40158,3.40157v11.15498
        C349.74771,137.10896,348.22476,138.6319,346.34613,138.6319z"
      />
    </>
  );
}

const Track = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;
