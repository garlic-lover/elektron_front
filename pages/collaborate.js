import styled from "styled-components";

import Typeform from "../components/Collaborate/Typeform";

export default function Collaborate() {
  return (
    <Wrapper>
      <Typeform />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 600px;
  & h3 {
    margin-bottom: 24px;
  }
  & p {
    margin-bottom: 36px;
  }
`;
