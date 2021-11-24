/** @format */

import styled from "styled-components";
import Sections from "./Sections";
import Header from "./Header";

function Landing() {
  return (
    <Container>
      <Sections />
      <Header />
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  width: 100%;
  heigth: 100vh;
`;
