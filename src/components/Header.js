/** @format */

import React from "react";
import styled from "styled-components";
import BackDrop from "../images/backsplash1.svg";
import CompanyLogo from "../images/logo.svg";

function Header() {
  return (
    <HeaderWrapper style={{ backgroundImage: { BackDrop } }}>
      <Logo>
        <img src={CompanyLogo} alt="Estack Logo" />
      </Logo>
      <MainNavigation>
        <a>Buy</a>
        <a>Sell</a>
        <a>Rent</a>
        <a>About us</a>
      </MainNavigation>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  outline: 4px solid green;
  display: inline-flex:
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%
  max-width: 91rem;
  margin: 0 auto;


  top: 0;
  left: 0;

//  background-image: url(../images/backsplash.svg);
`;

const Logo = styled.div`
  outline: 4px solid yellow;
  display: inline-block;
  cursor: pointer;
`;

const MainNavigation = styled.div`
  display: block;
  outline: 4px solid red;
  cursor: pointer;

  a {
    text-decoration: none;
    padding-right: 2rem;
  }
`;
