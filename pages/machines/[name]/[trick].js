import { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import TRICK from "../../../GraphQl/Queries/TRICK";

import { useRouter } from "next/router";

import Drawing from "../../../components/Octatrack/MachineDrawing";

export default function Trick() {
  const [selectedStep, selectedStepChange] = useState(0);

  const router = useRouter();
  let { trick } = router.query;

  const { data } = useQuery(TRICK, { variables: { trickName: trick } });

  if (!data) {
    return "Loading...";
  }

  const { name, description, steps } = data.trick;

  return (
    <Wrapper>
      <h2>
        <span
          onClick={() => {
            router.push(`/machines/${router.query.name}`);
          }}
        >
          ⏎
        </span>
        {name}
      </h2>
      <p>Description : {description}</p>
      <Main>
        <ul>
          {steps.map((step, index) => {
            return (
              <Step
                key={index}
                selected={selectedStep === index}
                onClick={() => {
                  selectedStepChange(index);
                }}
              >
                <h4>Step {index + 1}</h4>
                <p>{step.instruction}</p>
              </Step>
            );
          })}
        </ul>
        <DrawingWrapper>
          <Drawing
            selection={steps[selectedStep].buttons}
            onChange={() => {}}
          />
        </DrawingWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 94vw;
  max-width: 700px;
  margin: auto;
  & h2 {
    font-size: 2rem;
    margin-bottom: 24px;
    position: relative;
  }
  & h2 span {
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(-140%, -25%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  margin-top: 36px;
  justify-content: space-between;
  & h4 {
    margin-bottom: 12px;
  }
  & p {
    font-size: 14px;
  }
  & ul {
    width: 45%;
  }
`;

const Step = styled.li`
  transition: ease-in-out 0.3s;
  padding: 12px 24px;
  border: solid 1px
    ${(props) => (props.selected ? props.theme.mainColor : props.theme.grey)};
  margin-bottom: 12px;
  line-height: 20px;
  cursor: pointer;
`;

const DrawingWrapper = styled.div`
  width: 50%;
`;
