/** @format */

import styled from "styled-components";
import Sections from "./Sections";
import Header from "./Header";
import "./Landing.css";

function Landing() {
  return (
    <Container className="Container">
      <Sections />
      <Header />
    </Container>
  );
}

export default Landing;

const Container = styled.div``;
