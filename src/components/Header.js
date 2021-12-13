/** @format */

import React from "react";
import styled from "styled-components";
// import BackDrop from "../images/backsplash1.svg";
import CompanyLogo from "../images/logo.svg";
// House Advertisement photo
import AdHouse from "../images/ad-house.png";
import Family from "../images/family.png"
import "./Header.css";
import PageSearch from './PageSearch';

function Header() {
  return (
    <BackDrop className="backdrop">
      <HeaderWrapper className="HeaderWrapper">
        <Nav>
          <Logo>
            <img src={CompanyLogo} alt="Estack Logo" />
          </Logo>
          <MainNavigation>
            <a>Buy</a>
            <a>Sell</a>
            <a>Rent</a>
            <a className="btn">About Us </a>
            {/* <a>About us</a> */}
          </MainNavigation>
        </Nav>
        <AdWrapper className="adWrapper">
          <SearchAd className="searchAdv">
            <form >
              <label className="SearchLabel">Home is not a place <br />
              <em> It's a Feeling.</em>
                  
              </label>
              <input type="search" placeholder="Enter an address, or ZIP code" className="searchBox"/>
            </form>
            <img className="searchImage" src={ Family } />
          </SearchAd>
          <HouseAd className= "HouseAd">
            <img className="adHouse" src={AdHouse} alt="Picture of Luxury Home" />
          </HouseAd>
        </AdWrapper>
      </HeaderWrapper>
    </BackDrop>
  );
}

export default Header;

const HeaderWrapper = styled.div``;

const Logo = styled.div`
  padding-left: 40px;
`;

const MainNavigation = styled.div`
  align-items: center;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-weight: 600;
  padding-right: 60px;
  padding-top: 10px;

  a {
    align-items: center;
    text-decoration: none;
    padding-right: 2rem;
  }
`;

const BackDrop = styled.div``;

const HouseAd = styled.div`
  // z-index: -1;
  // margin-top: 4rem;
  // position: absolute;
  // width: 400px;
  // display: inline-block;
  // outline: 5px solid yellow;
  // right: 0;
  // img {
  //   width: 100%;
  // }
`;

const Nav = styled.div`
  display: flex;
  align-items;  center;
  justify-content: space-between;
  width: 100%;
  // outline: 5px solid orange;
`;

const SearchAd = styled.div``;

const AdWrapper = styled.div`
`;