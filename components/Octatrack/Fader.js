import styled from "styled-components";

export default function Fader({ selection, change }) {
  return (
    <>
      <Scene
        selected={selection.indexOf(12) !== -1}
        onClick={() => {
          change(12);
        }}
        d="M374.94342,201.7249H353.5267c-1.87863,0-3.40158-1.52293-3.40158-3.40157v-21.37485
c0-1.87863,1.52295-3.40158,3.40158-3.40158h21.41672c1.87863,0,3.40158,1.52295,3.40158,3.40158v21.37485
C378.345,200.20197,376.82205,201.7249,374.94342,201.7249z"
      />
      <Scene
        selected={selection.indexOf(13) !== -1}
        onClick={() => {
          change(13);
        }}
        d="M529.96545,201.72491h-21.41672c-1.87863,0-3.40158-1.52295-3.40158-3.40158v-21.37485
c0-1.87865,1.52295-3.40158,3.40158-3.40158h21.41672c1.87866,0,3.40155,1.52293,3.40155,3.40158v21.37485
C533.367,200.20197,531.84412,201.72491,529.96545,201.72491z"
      />
      <path
        d="M486.03592,187.47313c0-1.4232-1.15372-2.57693-2.57697-2.57693h-54.73099v5.15398h54.73099
        C484.8822,190.05017,486.03592,188.89633,486.03592,187.47313z"
      />
      <path
        d="M400.03128,184.89619c-1.42322,0-2.57693,1.15373-2.57693,2.57693s1.15372,2.57704,2.57693,2.57704h16.30099v-5.15398
        H400.03128z"
      />
      <CrossFader
        selected={selection.indexOf(14) !== -1}
        onClick={() => {
          change(14);
        }}
        d="M428.72797,180.39018c0-0.71207-0.12607-1.3932-0.34714-2.03014c-0.31009-0.89328-0.81299-1.69666-1.4675-2.35129
        c-0.9165-0.91684-2.12103-1.54018-3.4639-1.74039c-0.3006-0.04477-0.60574-0.07549-0.91876-0.07549
        c-0.35687,0-0.70447,0.0368-1.04477,0.09471c-1.35641,0.23068-2.5603,0.89938-3.4639,1.85876
        c-0.68808,0.73047-1.19855,1.62657-1.46844,2.62393c-0.13995,0.51715-0.22128,1.05844-0.22128,1.61989v4.50601v5.15398v4.82742
        c0,0.56157,0.08133,1.10286,0.22128,1.62c0.2699,0.9975,0.78036,1.89371,1.46844,2.62428
        c0.90359,0.9594,2.10748,1.62822,3.4639,1.85889c0.3403,0.05791,0.6879,0.09471,1.04477,0.09471
        c0.31302,0,0.61816-0.03072,0.91876-0.07549c1.34286-0.2002,2.54739-0.82378,3.4639-1.74049
        c0.65451-0.65488,1.15741-1.45825,1.4675-2.35165c0.22107-0.63693,0.34714-1.31818,0.34714-2.03024v-4.82742v-5.15398V180.39018z"
      />
    </>
  );
}

const Scene = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;

const CrossFader = styled.path`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;
