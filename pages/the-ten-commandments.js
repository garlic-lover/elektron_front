import styled from "styled-components";

export default function TheTenCommandments() {
  return (
    <Wrapper>
      <li>1-Patient and determinated you'll be </li>
      <li>2- Of menu diving, never you'll be afraid</li>
      <li>3- The button combinaisons you will remember</li>
      <li>4- On Elektronauts you'll ask your questions</li>
      <li>5- To Cenk always you will listen</li>
      <li>6- On each of your tracks, P-Locks you will use</li>
      <li>7- Never you will start the debate "analog vs digital"</li>
      <li>8- With good speakers you'll use your machines</li>
      <li>9- Your neighbours you will make crazy</li>
      <li>10- With beginners, friendly you'll be</li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & li {
    line-height: 2.5rem;
  }
`;
