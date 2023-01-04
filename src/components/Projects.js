import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {

    return (
      <div className='projects-container'>
        <div className='projects-container-content'>
          <h1>PROJECTS</h1>
          <ul className='projects-list'>
              <li className='projects-list-item'>CLK Psychotherapy</li>
              <li className='projects-list-item'>Orchid Worship <i>(coming soon...)</i></li>
              <li className='projects-list-item'><Link to='wormseye'>Worms Eye View</Link></li>
              <li className='projects-list-item'><a href="https://github.com/TeamA-Graceshopper-2022/treehousegoods" target="_blank">Tree House Goods</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Projects