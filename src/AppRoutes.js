import React from 'react';
import { About, Experience, Intro, Projects, Skills, Wormseye, Challenge, Challenges, Location } from './components';
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
            <Challenges />
          </>
        } />
        <Route path='/wormseye' element={<><Wormseye /><Projects /></>} />
        <Route path='/challenge' element={<><Challenge /><Projects /></>} />
        <Route path='/location' element={<Location />} />
        <Route path="*" element={
          <>
            <div className='landing'>
              <Intro />
              <div><About /><Experience /><Skills /></div>
            </div>
            <Projects />
            <Challenges />
          </>
        } />
      </Routes>
    </div>
  );
}

export default AppRoutes;