import React from 'react'
import './Day6.css'

function Day6() {

    return (
      <div>
        <div class="frame6">
        <div class="center6">
                <div class="box">
                    <div class="profile">
                        <div><img src="https://100dayscss.com/codepen/jessica-potter.jpg" class="profile-image" /></div>
                        <div class="semi-circles">
                            <div class="semi-circle-2"></div>
                            <div class="semi-circle-1"></div>
                        </div>
                        <div><p id="name">Jessica Porter</p></div>
                        <div><p class="subtitle" id="bio">Visual Artist</p></div>
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                    <div class="userInfoDivs">
                        <div class="userInfoDiv" id="top-right">
                            <p class="userInfo">523</p>
                            <p class="subtitle">Posts</p>
                        </div>
                        <div class="userInfoDiv">
                            <p class="userInfo">1387</p>
                            <p class="subtitle">Likes</p>
                        </div>
                        <div class="userInfoDiv" id="bottom-right">
                            <p class="userInfo">146</p>
                            <p class="subtitle">Follower</p>
                        </div>
                    </div>
                </div>
        </div>
        </div>

        <p>Day 6 | <a href="https://codepen.io/anemard/pen/oNMOXMa" target="_blank">CodePen</a></p>
      </div>
    )
}

export default Day6