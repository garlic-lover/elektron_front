import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

import Header from "../Header";
import GlobalStyles from "./GlobalStyles";

import themeDark from "./themeDark.json";
import themeLight from "./themeLight.json";

import Switch from "./Switch";
import LeftMenu from "./LeftMenu";

import useAppContext from "../../hooks/useAppContext";
import useGetCurrentRoute from "../../hooks/useGetCurrentRoute";

export default function Layout({ children }) {
  const route = useGetCurrentRoute();
  const {
    state: { darkTheme },
    dispatch,
  } = useAppContext();

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Header route={route} />
      <LeftMenu route={route} />
      <Container>{children}</Container>
      <Link href="/new-trick">
        <AddWrapper>
          <p>Add a trick</p>
          <span>➕</span>
        </AddWrapper>
      </Link>
      <SwitchWrapper>
        <p>theme</p>
        <Switch
          value={darkTheme}
          valueChange={(value) => {
            dispatch({ type: "DARK_THEME_CHANGE", darkTheme: value });
          }}
        />
      </SwitchWrapper>
    </ThemeProvider>
  );
}

const Container = styled.main``;

const AddWrapper = styled.div`
  position: fixed;
  bottom: 48px;
  right: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & p {
    margin-right: 6px;
  }
  & span {
  }
`;

const SwitchWrapper = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  & p {
    margin-right: 6px;
  }
`;
