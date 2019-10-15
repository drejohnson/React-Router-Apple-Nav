import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

const StyledNav = styled(animated.nav)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items; center;
  margin: 0 2.5rem;
  padding: 1rem 0;

  a {
    color: #111;
    font-size: .875rem;
    line-height: 3;
  }
`;

const SubNav = ({ match }) => {
  const slideInRight = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			transform: 'translate3d(-40px,0,0)'
		}
  });
  const slideInLeft = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			transform: `translate3d(100%,0,0)`
		}
	});
  return (
    <StyledNav style={slideInLeft}>
      <Link to={`${match.url}/macbook-air`}>MacBook Air</Link>
      <Link to={`${match.url}/macbook-pro`}>MacBook Pro</Link>
      <Link to={`${match.url}/imac`}>iMac</Link>
      <Link to={`${match.url}/imac-pro`}>iMac Pro</Link>
      <Link to={`${match.url}/mac-pro`}>Mac Pro</Link>
      <Link to={`${match.url}/mac-mini`}>Mac mini</Link>
      <Link to={`${match.url}/compare`}>Compare</Link>
      <Link to={`${match.url}/pro-display-xdr`}>Pro Display XDR</Link>
      <Link to={`${match.url}/accessories`}>Accessories</Link>
    </StyledNav>
  );
};

export default SubNav;
