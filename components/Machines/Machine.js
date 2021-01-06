import { useState } from "react";
import { animated } from "react-spring";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "styled-components";

import TRICKS from "../../GraphQl/Queries/TRICKS";

import FilterBar from "./FilterBar";

function isFilteredCheck(levelFilter, themeFilter, level, theme) {
  let isFiltered = false;
  // Check the level
  if (levelFilter !== "All levels" && levelFilter.toLowerCase() !== level) {
    isFiltered = true;
  }
  // Check the theme
  if (themeFilter !== "All themes" && themeFilter.toLowerCase() !== theme) {
    isFiltered = true;
  }

  return isFiltered;
}

export default function Machine({ machine, style, route }) {
  const [levelFilter, levelFilterChange] = useState("All levels");
  const [themeFilter, themeFilterChange] = useState("All themes");

  const router = useRouter();
  const { data } = useQuery(TRICKS, { variables: { machine: route } });

  return (
    <Wrapper style={style}>
      <h2>{machine?.title}</h2>
      <FilterBar
        levelFilter={levelFilter}
        levelFilterChange={levelFilterChange}
        themeFilter={themeFilter}
        themeFilterChange={themeFilterChange}
      />
      <List>
        {data?.tricks.map((tuto, index) => {
          const { theme, level } = tuto;
          let isFiltered = isFilteredCheck(
            levelFilter,
            themeFilter,
            level,
            theme
          );
          if (isFiltered) {
            return null;
          }
          return (
            <li
              key={index}
              onClick={() => {
                router.push(`/machines/${machine.url}/${tuto.name}`);
              }}
            >
              {tuto.name}
            </li>
          );
        })}
        {data && data.tricks.length === 0 && (
          <li>No trick matching your research</li>
        )}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  & h2 {
    font-size: 1.4rem;
    line-height: 36px;
    margin-bottom: 12px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  & li {
    border: solid 1px ${(props) => props.theme.mainColor};
    padding: 30px 20px;
    cursor: pointer;
  }
`;
