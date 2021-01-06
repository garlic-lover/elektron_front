import Link from "next/link";
import styled from "styled-components";

const menuItems = [
  { name: "About", pathname: "/about" },
  { name: "The 10 commandments", pathname: "/the-ten-commandments" },
  { name: "Collaborate", pathname: "/collaborate" },
];

export default function Header({ route }) {
  return (
    <Wrapper>
      <div>
        <Link href="/">
          <h1>The Elektron bible</h1>
        </Link>
        <h3>An unofficial guide</h3>
      </div>
      <Menu>
        {menuItems.map((item, index) => {
          return (
            <Link key={index} href={item.pathname}>
              <MenuItem selected={route === item.pathname}>
                {item.name}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  & h1 {
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.p`
transition: ease-in-out 0.25s;
margin-left: 18px;
cursor: pointer;
padding: 0;
height: 24px;
border-bottom: solid 2px ${(props) =>
  props.selected ? props.theme.mainColor : "transparent"};
&:hover {
    border-bottom: solid 2px ${(props) => props.theme.mainColor};
  }
}
`;
