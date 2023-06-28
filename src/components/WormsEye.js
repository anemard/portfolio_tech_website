import React from 'react'
import { Link } from 'react-router-dom'
import WormsEyeLanding from '../imgs/WormsEye-1-lg.jpg'
import WormsEyeJournal from '../imgs/WormsEye-3-lg.jpg'
import DataImg1 from '../imgs/data-weather-algo.jpg'
import DataImg2 from '../imgs/data-weather-algo2.jpg'
import DesignUXUI from '../imgs/ux-ui-wormseye.jpg'

function Wormseye() {

    return (
        <>
        <div className='wormseye-container'>
            <div className='wormseye-container-content'>
                <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
                <div className='projects-top-content-container'>
                    <h1>Worm's Eye View</h1>
                    <div className='projects-about'>
                        <span className="component-title">ABOUT</span>
                        <p>Worm's Eye View is a gardening companion application designed to make gardening easier by providing users with daily plant suggestions, a virtual garden plot design tool for planning, a personal gardening journal to log user's strategies, and keeps track of an user's favorite plants.</p>
                        <p>Using USDA zone data, US Climate weather API and our plant database, Worm's Eye View offers plant suggestions that can be planted today based on your location, time of year and current weather. Our plot visualization uses P5.js to create a digital garden plot that the user can add and remove plants for planning their garden. Our journal allows the user to create logs and post photos so our users can replicate their successful strategies and forgo failed attempts in the garden in future seasons. This application uses React.js to manage state and Firebase for user authentication and data management.</p>
                        <p>Created by: An Emard, Kevin Lam, Kenny Johnson and Grace Gao</p>
                    </div>
                    <img src={WormsEyeLanding} className="Project-Page-Img" />
                    <img src={DesignUXUI} className="Project-Page-Img" />
                    <div className='WormsEye-Role'>
                        <span className="component-title">MY ROLE</span>
                        <p>For this project, team collaborated on the application UX/UI. I built the plant suggestions functions, ensuring a major feature of our application worked propperly based on user location and the time of year. I built and designed the navigation component. I was also integral in generating the All Plants component's filtering and pagination.</p>
                    </div>
                    <img src={DataImg1} className="Project-Page-Img" />
                    <img src={DataImg2} className="Project-Page-Img" />
                    <img src={WormsEyeJournal} className="Project-Page-Img" />

                </div>

                <center><div>
                    <iframe width="800vw" height="450vh" src="https://www.youtube.com/embed/fEmLLwRqpCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p><a href="https://github.com/team-mind-capstone" target="_blank">GitHub</a> | <a href="https://www.youtube.com/watch?v=fEmLLwRqpCI" target="_blank">YouTube</a></p>
                </div></center>
                
                
            </div>
        </div>
        </>
    )
}

export default Wormseye