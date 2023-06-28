import React from 'react'

function Skills() {

    return (
      <div className='skills-container'>
        <span className="component-title">SKILLS</span>
        <ul className='skills-list'>
            <li className='skills-list-item'>
                <i className="fab fa-js-square fa-3x fa-inverse"></i>
                <span className="icon-name">JavaScript</span>
            </li>
            <li className='skills-list-item'>
                <i className="fa-brands fa-react fa-3x fa-inverse"></i>
                <span className="icon-name">React</span>
            </li>
            <li className='skills-list-item'>
                <i className="fas fa-database fa-3x fa-inverse"></i>
                <span className="icon-name">PostgresSQL</span>
            </li>
            <li className='skills-list-item'>
                <i className="fa-solid fa-fire-flame-curved fa-3x fa-inverse"></i>
                <span className="icon-name">Firebase</span>
            </li>
            <li className='skills-list-item'>
                <i className="fa-brands fa-node-js fa-3x fa-inverse"></i>
                <span className="icon-name">Node.js</span>
            </li>
            <li className='skills-list-item'>
                <i className="fa-brands fa-css3-alt fa-3x fa-inverse"></i>
                <span className="icon-name">CSS3</span>
            </li>
            <li className='skills-list-item'>
                <i className="fa-brands fa-html5 fa-3x fa-inverse"></i>
                <span className="icon-name">HTML5</span>
            </li>


        </ul>
      </div>
    )
}

export default Skills