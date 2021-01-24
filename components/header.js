import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Container>
        <LeftNav>
          <h1>Reach</h1>
        </LeftNav>
        <RightNav>
          <ul>
            <a href="#about">
              {" "}
              <li>About</li>{" "}
            </a>
            <a href="#search">
              <li>Search</li>
            </a>
            <a href="#contactus">
              <li>Contact</li>
            </a>
          </ul>
        </RightNav>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr repeat(3, fit-content(250px));
  justify-content: space-between;
  margin: 20px 160px 0px 160px;
  @media only screen and (max-width: 1440px) {
    margin: 20px 120px 0px 120px;
  }
`;

const LeftNav = styled.div`
  h1 {
    color: #403d39;
    font-size: 2.6rem;
  }
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }

  li {
    color: #fffcf2;
    font-weight: 500;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0px 25px;
  }
`;
