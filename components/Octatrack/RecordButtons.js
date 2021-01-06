import styled from "styled-components";

export default function PlayButtons({ selection, change }) {
  return (
    <>
      <Record
        selected={selection.indexOf(45) !== -1}
        onClick={() => {
          change(45);
        }}
        d="M81.57505,87.0929H70.42008c-1.87864,0-3.40158-1.52293-3.40158-3.40157V72.53636
c0-1.87864,1.52294-3.40158,3.40158-3.40158h11.15497c1.87864,0,3.40157,1.52294,3.40157,3.40158v11.15497
C84.97662,85.56997,83.45369,87.0929,81.57505,87.0929z"
      />
      <Record
        selected={selection.indexOf(46) !== -1}
        onClick={() => {
          change(46);
        }}
        d="M133.15904,87.0929h-11.15498c-1.87864,0-3.40158-1.52293-3.40158-3.40157V72.53636
c0-1.87864,1.52294-3.40158,3.40158-3.40158h11.15498c1.87863,0,3.40157,1.52294,3.40157,3.40158v11.15497
C136.56061,85.56997,135.03767,87.0929,133.15904,87.0929z"
      />
      <Record
        selected={selection.indexOf(47) !== -1}
        onClick={() => {
          change(47);
        }}
        d="M107.34456,87.09291H96.18958c-1.87864,0-3.40157-1.52293-3.40157-3.40157V72.53636
c0-1.87864,1.52293-3.40157,3.40157-3.40157h11.15498c1.87864,0,3.40157,1.52293,3.40157,3.40157v11.15498
C110.74613,85.56998,109.2232,87.09291,107.34456,87.09291z"
      />
    </>
  );
}

const Record = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;
