import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>An open source database made by some Elektron disciples</Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
