import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "styled-components";

import TRICK_CREATE from "../GraphQl/Mutations/TRICK_CREATE";

import useNewTrickData from "../components/NewTrick/useNewTrickData";
import MachinePopup from "../components/NewTrick/MachinePopup";

function Input({ name, value, valueChange }) {
  return (
    <InputWrapper>
      <h4>{name}</h4>
      <input
        value={value}
        onChange={(e) => {
          valueChange(e.target.value);
        }}
      />
    </InputWrapper>
  );
}

function Select({ fields: { name, key, change, options } }) {
  return (
    <SelectWrapper>
      <h4>{name}</h4>
      <select
        value={key}
        onChange={(e) => {
          if (name === "Machine" && e.target.value !== "octatrack") {
            alert("Only the Octatrack is available for now");
          } else {
            change(e.target.value);
          }
        }}
      >
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </SelectWrapper>
  );
}

function Step({
  instruction,
  change,
  stepDelete,
  index,
  openedMachineStepChange,
  buttons,
}) {
  return (
    <StepWrapper>
      <h4>Step {index + 1}</h4>
      <textarea
        value={instruction}
        onChange={(e) => {
          change(e.target.value);
        }}
      />
      <p
        onClick={() => {
          openedMachineStepChange(index);
        }}
      >
        {buttons.length > 0
          ? "Modify buttons indications"
          : "Add buttons indications"}
      </p>
      <span
        onClick={() => {
          stepDelete();
        }}
      >
        🗑
      </span>
    </StepWrapper>
  );
}

export default function NewTrick() {
  const router = useRouter();
  const [openedMachineStep, openedMachineStepChange] = useState(null);

  const {
    inputFields,
    selectField1,
    selectField2,
    selectField3,
    stepper,
    toSend,
  } = useNewTrickData();

  const [trickCreate] = useMutation(TRICK_CREATE, {
    onCompleted: (res) => {
      if (trickCreate) {
        alert("Ajout réussi");
        router.push("/");
      }
    },
  });

  return (
    <>
      {openedMachineStep !== null && (
        <MachinePopup
          close={() => {
            openedMachineStepChange(null);
          }}
          selection={stepper.steps[openedMachineStep].buttons}
          onChange={(tab) => {
            stepper.buttonsChange(tab, openedMachineStep);
          }}
        />
      )}
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          trickCreate({ variables: { trick: toSend } });
        }}
      >
        <section>
          <LeftPart>
            <h2>Add a new trick</h2>
            {inputFields.map((field, index) => {
              return (
                <Input
                  key={index}
                  name={field.name}
                  value={field.key}
                  valueChange={field.change}
                />
              );
            })}
            <Select fields={selectField1} />
            <Select fields={selectField2} />
            <Select fields={selectField3} />
          </LeftPart>
          <RightPart>
            {/*    <MachineDrawing /> */}
            {stepper.steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  instruction={step.instruction}
                  change={(value) => {
                    stepper.change(value, index);
                  }}
                  stepDelete={() => {
                    stepper.delete(index);
                  }}
                  buttons={step.buttons}
                  index={index}
                  openedMachineStepChange={openedMachineStepChange}
                />
              );
            })}
            <StepApp
              onClick={() => {
                stepper.add();
              }}
            >
              Add a step
            </StepApp>
          </RightPart>
        </section>
        <button>Validate</button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.form`
  position: relative;
  width: 94vw;
  max-width: 800px;
  margin: auto;
  & h2 {
    margin-bottom: 24px;
  }
  & h3 {
    margin-bottom: 16px;
  }
  & button {
    display: block;
    margin: auto;
    margin-top: 42px;
    padding: 12px 24px;
    border: solid 1px ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.mainColor};
  }
  & section {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  & svg {
    margin-bottom: 24px;
  }
`;

const LeftPart = styled.div`
  width: 50%;
`;

const RightPart = styled.div`
  width: 50%;
`;

const InputWrapper = styled.div`
  margin-bottom: 12px;
  & h4 {
    margin-bottom: 6px;
  }
  & input {
    width: 70%;
  }
`;

const SelectWrapper = styled.div`
  & select {
    width: 70%;
    margin-bottom: 12px;
  }
  & h4 {
    margin-bottom: 6px;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
  & h4 {
    margin-bottom: 12px;
  }
  & span {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
    font-size: 12px;
    cursor: pointer;
  }
  & textarea {
    width: 95%;
    min-height: 40px;
  }
  & p {
    margin-top: 6px;
    cursor: pointer;
    text-decoration: underline;
    font-size: 11px;
  }
`;

const StepApp = styled.p`
  cursor: pointer;
  margin: auto;
  margin-top: 36px;
  cursor: pointer;
  border: solid 1px ${(props) => props.theme.mainColor};
  padding: 6px 12px;
  width: 150px;
  text-align: center;
  font-size: 12px;
`;
