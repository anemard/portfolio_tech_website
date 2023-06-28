import React from 'react'
import { Link } from 'react-router-dom'
import clk1 from '../imgs/clk-1.jpg'
import clk2 from '../imgs/clk-2.jpg'
import clk3 from '../imgs/clk-3.jpg'
import clk4 from '../imgs/clk-4.jpg'
import clk5 from '../imgs/clk-5.jpg'
import clkFigma from '../imgs/clk-figma.jpg'


function Clk() {

    return (

        <>
        <div className='wormseye-container'>
            <div className='wormseye-container-content'>
                <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
                <div className='projects-top-content-container'>
                    <h1>CLK Psychotherapy</h1>
                    <div className='projects-about'>
                        <span className="component-title">ABOUT</span>
                        <p>CLK Psychotherapy is a website for a therapist's private practice business. The website is used to provide potential clients with information about the specialties and services offered, connect resources for clients, and allow potential clients to inquire. Since the website is connected to a database, the client's content is editable online. This website was built in React.js, and uses Axios calls to the postgreSQL database. The website also includes an Email.js plugin to allow on-platform contact with prospective client to business owner.</p>
                        <p>For this project, I used the “who-what-why-call to action” logic for page layout and took UX/UI inspiration from Steve Krug's book “Don't Make Me Think”. I designed, made drawings,and developed this project using Figma and Adobe Photoshop. While this was accomplished solo, I worked closely with my client to ensure design direction and UX/UI was both satisfactory and met product needs.</p>
                        <p>For more information: <a href='https://github.com/anemard/CLK_Pysch_Final' target='_blank'>Github</a></p>
                    </div>
                    <img src={clk1} className="Project-Page-Img" />
                    <img src={clk2} className="Project-Page-Img" />
                    <img src={clk3} className="Project-Page-Img" />
                    <img src={clk4} className="Project-Page-Img" />
                    <img src={clk5} className="Project-Page-Img" />
                    <img src={clkFigma} className="Project-Page-Img" />
                </div>       
            </div>
        </div>
        </>
    )
}

export default Clk