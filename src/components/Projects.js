import React from 'react'
import { Link } from 'react-router-dom'
import WormsEyeViewPic from '../imgs/WormsEyeView.jpg'
import TreeHousePic from '../imgs/TreeHouseGoods.jpg'

function Projects() {

    return (
      <div className='projects-container'>
        <div className='projects-container-content'>
          <span className='projects-title'>PROJECTS</span>
          <ul className='projects-list'>
              <li className='projects-list-item'><Link to='wormseye'><img src={WormsEyeViewPic} width="300vw" /></Link></li>
              <li className='projects-list-item'><a href="https://github.com/TeamA-Graceshopper-2022/treehousegoods" target="_blank"><img src={TreeHousePic} width="300vw" /></a></li>
          </ul>
        </div>
      </div>
    )
}

export default Projects