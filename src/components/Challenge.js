import React from 'react'
import { Link } from 'react-router-dom'
import day1 from '../imgs/Day1.jpg'
import day2 from '../imgs/Day2.jpg'

function Challenge() {

    return (
      <>
      <div className='wormseye-container'>
          <div className='wormseye-container-content'>
              <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
              <h1>100 Day CSS Challenge</h1>
              <div className='challenge-cards'>

                <div className='challenge-card'>
                  <a href="https://codepen.io/anemard/pen/bGjYXpX" target="_blank"><img src={day1} width="300vw" />
                  <p>Day 1</p></a>
                </div>
                
                <div className='challenge-card'>
                  <a href="https://codepen.io/anemard/pen/mdjpmYO" target="_blank">
                    <img src={day2} width="300vw" />
                    <p>Day 2</p>
                  </a>
                </div>

              </div>           
          </div>
      </div>
      </>
    )
}

export default Challenge