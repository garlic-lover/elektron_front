import styled from "styled-components";

export default function Collaborate() {
  return (
    <Wrapper>
      <h3>Want to join the adventure ? </h3>
      <p>Send us a mail or contact us in facebook </p>
      <h3>Who would we need with us ? </h3>
      <p>
        Designers/graphists, content writers, web developpers, music lovers...
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & h3 {
    margin-bottom: 24px;
  }
  & p {
    margin-bottom: 36px;
  }
`;
