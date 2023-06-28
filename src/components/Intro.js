import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {

    return (
      <div className='intro-container'>
        <h1>AN EMARD</h1>
        <p>👋🏻 I am a Web Developer/Designer and Visual Artist.</p>
        <p>I currently reside in Chicago, IL. <Link to='location'>
            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </Link></p>



        <p><a href="https://www.linkedin.com/in/an-emard/" target='_blank'>LinkedIn</a> | <a href="https://github.com/anemard" target="_blank" >GitHub</a></p>
      </div>
    )
}

export default Intro