import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items; center;
  width: 100%;

  a {
    color: white;
    line-height: 3;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to='/mac'>Mac</Link>
      <Link to='/ipad'>IPad</Link>
      <Link to='/iphone'>iPhone</Link>
      <Link to='/watch'>Watch</Link>
      <Link to='/tv'>TV</Link>
      <Link to='/support'>Support</Link>
    </StyledNav>
  );
};

export default Nav;
