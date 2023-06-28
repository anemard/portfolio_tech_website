import React from 'react';
import { About, Experience, Intro, Projects, Skills, Wormseye, TreeHouseGoods, Clk, Location } from './components';
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
        <Route path='/treehouse' element={<><TreeHouseGoods /><Projects /></>} />
        <Route path='/clk' element={<><Clk /><Projects /></>} />
        <Route path='/location' element={<Location />} />
        <Route path="*" element={
          <>
            <div className='landing'>
              <Intro />
              <div><About /><Experience /><Skills /></div>
            </div>
            <Projects />
          </>
        } />
      </Routes>
    </div>
  );
}

export default AppRoutes;