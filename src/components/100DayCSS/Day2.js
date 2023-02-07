import React from 'react'
import './Day2.css'

function Day2() {
    let value = "bar.active";

    function clickToggle() {
    }

    return (
    <div>
        <div className="frame2">
                <div className="center2">
                    <div className="bars" onClick={clickToggle()}>
                        <div className="bar" id="bar-1"></div>
                        <div className="bar" id="bar-2"></div>
                        <div className="bar" id="bar-3"></div>
                    </div>
                </div>
        </div>
        <p>Day 2 | <a href="https://codepen.io/anemard/pen/mdjpmYO" target="_blank">CodePen</a></p>
        
    </div>
    )
}

export default Day2