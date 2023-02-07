import React from 'react'
import { Link } from 'react-router-dom'
import { Day1, Day2, Day3, Day4, Day5, Day6 } from './100DayCSS'

function Challenge() {

    return (
      <>
      <div className='wormseye-container'>
          <div className='wormseye-container-content'>
              <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
              <h1>100 Day CSS Challenge</h1>
              <div className='challenge-cards'>
                <div className='challenge-card'><Day1 /></div>
                <div className='challenge-card'><Day2 /></div>
                <div className='challenge-card'><Day3 /></div>
                <div className='challenge-card'><Day4 /></div>
                <div className='challenge-card'><Day5 /></div>
                <div className='challenge-card'><Day6 /></div>
              </div>        
          </div>
      </div>
      </>
    )
}

export default Challenge