import React from 'react'
import { Link } from 'react-router-dom'

function Location() {

    return (
        <>
        <div className='wormseye-container'>
            <div className='wormseye-container-content'>
                <Link to="/"><i className="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
                <div className='projects-top-content-container'>
                    <h1>LOCATION</h1>
                    <div className='projects-about'>
                        <p>I reside on the unceded homelands of the people of the Council of Three Fires, the Ojibwe, Potawatomi, and Odawa as well as the Menominee, Miami and Ho-Chunk nations.</p>
                        <p>For more information about indigenous ancestral homelands across the globe, please visit: <a href="https://native-land.ca/" target="_blank">native-land.ca</a> </p>
                        <center><iframe src="https://native-land.ca/api/embed/embed.html?maps=territories&position=41.8781,-87.6298" className='location-map'></iframe></center>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Location