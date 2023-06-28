import React from 'react'
import { Link } from 'react-router-dom'
import WormsEyeViewPic from '../imgs/WormsEye-1-lg.jpg'
import clk from '../imgs/clk-1.jpg'
import THG from '../imgs/THG-landing.jpg'

function Projects() {

    return (
      <div className='projects-container'>
        <div className='projects-container-content'>
          <span className='projects-title'>PROJECTS</span>

          <div className='projects-list'>
            <div className='projects-list-item'>
              <Link to='clk'><img src={clk} className='proj-img' /></Link>
            </div>
            <div className='projects-list-item'>
              <Link to='wormseye'><img src={WormsEyeViewPic} className='proj-img' /></Link>
            </div>
            <div className='projects-list-item'>
              <Link to='treehouse'><img src={THG} className='proj-img'/></Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects