import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import logo from '../logo.svg';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items; center;
  position: absolute;
  top: 0;
  left 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
  padding: 0 1rem;
  z-index: 5;
`;

const StyledImg = styled.img`
  padding: 0 .875rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledImg src={logo} className="App-logo" alt="logo" />
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
