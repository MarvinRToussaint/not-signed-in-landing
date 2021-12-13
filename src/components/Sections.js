/** @format */

import React from "react";
import styled from "styled-components";
import Header from "./Header";

function Sections() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default Sections;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100vw;
  // height: 100vh;
  //   background-color: lightblue;
  background-image: url(../images/backsplash1.svg);
  background-size: cover;
  background-color: lightgrey;
`;
