import styled from "styled-components";

export default function FilterBar({
  levelFilter,
  levelFilterChange,
  themeFilter,
  themeFilterChange,
}) {
  return (
    <Wrapper>
      {/* <div>
        Level
        <span
          onClick={() => {
            alert("Feature under construct");
          }}
        >
          ▽
        </span>
      </div> */}
      <SelectBloc>
        <h4>Level</h4>
        <select
          value={levelFilter}
          onChange={(e) => {
            levelFilterChange(e.target.value);
          }}
        >
          <option>All levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </SelectBloc>
      <SelectBloc>
        <h4>Theme</h4>
        <select
          value={themeFilter}
          onChange={(e) => {
            themeFilterChange(e.target.value);
          }}
        >
          <option>All themes</option>
          <option>Sound</option>
          <option>Sequencer</option>
        </select>
      </SelectBloc>

      {/* <div>
        Theme
        <span
          onClick={() => {
            alert("Feature under construct");
          }}
        >
          ▽
        </span>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  //border: solid 1px ${(props) => props.theme.mainColor};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  /*  & div {
    border: solid 1px ${(props) => props.theme.mainColor};
    padding: 6px 12px;
    margin-right: 12px;
    font-size: 0.8rem;
  } */
  & span {
    margin-left: 12px;
    cursor: pointer;
  }
`;

const SelectBloc = styled.div`
  padding: 0;
  &:first-child {
    margin-right: 12px;
  }
  & h4 {
    margin-bottom: 4px;
  }
`;
