import styled from "styled-components";

import Drawing from "../Octatrack/MachineDrawing";

export default function MachinePopup({ close, selection, onChange }) {
  return (
    <Wrapper
      onClick={() => {
        close();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Drawing selection={selection} onChange={onChange} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
