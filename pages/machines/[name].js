import { useRouter } from "next/router";
import { useTransition } from "react-spring";
import styled from "styled-components";

import Machine from "../../components/Machines/Machine";

const machinesList = {
  octatrack: {
    title: "The octatrack : what a complex machine",
    url: "octatrack",
  },
  digitone: {
    title: "Digitone : superb FM with (a bit) less pain",
    url: "digitone",
  },
  digitakt: { title: "Digitakt : the small powerhouse", url: "digitakt" },
  "analog-four": {
    title: "Analog four : controlled warmness",
    url: "analog-four",
  },
  "analog-rythm": {
    title: "Analog rythm : boum boum boum",
    url: "analog-rythm",
  },
};

export default function Digitakt() {
  const route = useRouter().query.name;

  const transitions = useTransition(route, (route) => route, {
    from: { opacity: 0, transform: "translate3d(0, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 0, 0)" },
  });

  if (!route) {
    return "loading...";
  }

  return (
    <Wrapper>
      {transitions.map(({ item, props }, index) => {
        return (
          <Machine
            key={index}
            style={props}
            machine={machinesList[item]}
            route={route}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 94vw;
  max-width: 700px;
  margin: auto;
`;
