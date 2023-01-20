import React from 'react'
import { Link } from 'react-router-dom'
import day1 from '../imgs/Day1.jpg'

function Challenges() {

    return (
      <div className='projects-container'>
        <div className='projects-container-content'>
          <span className='projects-title'>CHALLENGES</span>
          <ul className='projects-list'>
              <li className='projects-list-item'><Link to="challenge"><img src={day1} width="300vw" /></Link></li>
          </ul>
        </div>
      </div>
    )
}

export default Challenges