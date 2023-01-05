import React from 'react'

function Skills() {

    return (
      <div className='skills-container'>
        <span className="component-title">SKILLS</span>
        <ul class='skills-list'>
            <li class='skills-list-item'>
                <i class="fab fa-js-square fa-3x fa-inverse"></i>
                <span class="icon-name">JavaScript</span>
            </li>
            <li class='skills-list-item'>
                <i class="fa-brands fa-react fa-3x fa-inverse"></i>
                <span class="icon-name">React</span>
            </li>
            <li class='skills-list-item'>
                <i class="fas fa-database fa-3x fa-inverse"></i>
                <span class="icon-name">PostgresSQL</span>
            </li>
            <li class='skills-list-item'>
                <i class="fa-solid fa-fire-flame-curved fa-3x fa-inverse"></i>
                <span class="icon-name">Firebase</span>
            </li>
            <li class='skills-list-item'>
                <i class="fa-brands fa-node-js fa-3x fa-inverse"></i>
                <span class="icon-name">Node.js</span>
            </li>
            <li class='skills-list-item'>
                <i class="fa-brands fa-css3-alt fa-3x fa-inverse"></i>
                <span class="icon-name">CSS3</span>
            </li>
            <li class='skills-list-item'>
                <i class="fa-brands fa-html5 fa-3x fa-inverse"></i>
                <span class="icon-name">HTML5</span>
            </li>


        </ul>
      </div>
    )
}

export default Skills