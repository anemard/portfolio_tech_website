import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {

    return (
      <div className='projects-container'>
        <div className='projects-container-content'>
          <span className='projects-title'>PROJECTS</span>
          <ul className='projects-list'>
              <li className='projects-list-item'><a href="https://github.com/anemard/clk_psych" target="_blank">CLK Psychotherapy PLLC</a> <i>(in progress)</i></li>
              <li className='projects-list-item'>Orchid Worship <i>(coming soon...)</i></li>
              <li className='projects-list-item'><Link to='wormseye'>Worms Eye View</Link></li>
              <li className='projects-list-item'><a href="https://github.com/TeamA-Graceshopper-2022/treehousegoods" target="_blank">Tree House Goods</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Projects