import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from './style/Global';
import Header from './components/Header';
import Home from './views/Home';
import Mac from './views/Mac';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/mac' component={Mac} />
      </div>
    </>
  );
}

export default App;
