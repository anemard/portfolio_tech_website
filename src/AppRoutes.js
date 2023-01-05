import React from 'react';
import { About, Experience, Intro, Projects, Skills, Wormseye } from './components';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {

  return (
    <div className="App-Routes">
      <Routes>
        <Route path="/" element={
          <>
            <div className='landing'>
              <Intro />
              <div><About /><Experience /><Skills /></div>
            </div>
            <Projects />
          </>
        } />
        <Route path='/wormseye' element={<><Wormseye /><Projects /></>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;