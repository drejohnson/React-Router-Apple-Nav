import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  h1 {
    color: #111;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  );
};

export default Home;