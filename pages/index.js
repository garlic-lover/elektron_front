import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>The super Elektron guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>Home page under construct</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & img {
    width: 400px;
    height: auto;
  }
`;
