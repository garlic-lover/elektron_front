import Link from "next/link";
import styled from "styled-components";

const machines = [
  { name: "Octatrack", pathname: "octatrack" },
  { name: "Digitone", pathname: "digitone" },
  { name: "Digitakt", pathname: "digitakt" },
  { name: "Analog four", pathname: "analog-four" },
  { name: "Analog rythm", pathname: "analog-rythm" },
];

export default function LeftMenu({ route }) {
  return (
    <Wrapper>
      {machines.map((machine, index) => {
        return (
          <Link
            key={index}
            href="/machines/[name]"
            as={`/machines/${machine.pathname}`}
          >
            <Item selected={route === `/machines/${machine.pathname}`}>
              {machine.name}
            </Item>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  position: fixed;
  left: 20px;
`;

const Item = styled.li`
  transition: ease-in-out 0.2s;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? props.theme.mainColor : props.theme.grey};
  line-height: 36px;
  margin-bottom: 4px;
  border-bottom: solid 2px
    ${(props) => (props.selected ? props.theme.mainColor : "transparent")};
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;
