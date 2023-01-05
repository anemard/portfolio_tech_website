import React from 'react'
import { Link } from 'react-router-dom'

function Wormseye() {

    return (
        <>
        <div className='wormseye-container'>
            <div className='wormseye-container-content'>
                <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
                <h1>Worm's Eye View</h1>
                <p>Worm's Eye View is a mobile first design built to assist beginners into the joys of gardening. Our team used React for state management, Firebase Firestore and Authorization for user and data managment, and P5.js and CSS3 in styling.</p>
                <p><a href="https://github.com/team-mind-capstone" target="_blank">GitHub</a> | <a href="https://www.youtube.com/watch?v=fEmLLwRqpCI" target="_blank">YouTube</a></p>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fEmLLwRqpCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </>
    )
}

export default Wormseye