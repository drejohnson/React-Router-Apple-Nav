import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components/macro';

import SubNav from '../components/SubNav';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const SubView = ({ match }) => (
  <div>
    <h3>Section: {match.params.sectionName}</h3>
  </div>
);

const Mac = ({ match }) => {
  console.log(match)
  return (
    <>
      <Wrapper>
        <SubNav match={match} />
        <Route path={`${match.url}/:sectionName`} component={SubView} />
      </Wrapper>
      <Route
        exact
        path={match.url}
        render={() => <h3>Looking to buy a new Mac?</h3>}
      />
    </>
  );
};

export default Mac;
