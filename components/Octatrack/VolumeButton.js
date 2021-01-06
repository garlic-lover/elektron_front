import styled from "styled-components";

export default function VolButton({ selection, change }) {
  return (
    <VolumeButton
      selected={selection.indexOf(44) !== -1}
      onClick={() => {
        change(44);
      }}
    >
      <path
        d="M14.05888,52.34431c0-5.756,4.66616-10.42217,10.42216-10.42217c5.756,0,10.42217,4.66616,10.42217,10.42216
c0,5.756-4.66616,10.42216-10.42217,10.42217C18.72505,62.76648,14.05888,58.10031,14.05888,52.34431L14.05888,52.34431z"
      />
    </VolumeButton>
  );
}

const VolumeButton = styled.g`
  &:hover {
    fill: #fcfdff;
  }
  fill: ${(props) => (props.selected ? "green" : "")};
`;
