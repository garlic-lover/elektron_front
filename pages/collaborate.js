import styled from "styled-components";

import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("../components/Collaborate/Typeform"), {
  ssr: false,
});

export default function Collaborate() {
  return (
    <Wrapper>
      <TypeForm />
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
