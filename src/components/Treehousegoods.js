import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../imgs/THG-landing.jpg'
import Products from '../imgs/THG-Products.jpg'
import Design from '../imgs/THG-layout.jpg'

function TreeHouseGoods() {

    return (
        <>
        <div className='wormseye-container'>
            <div className='wormseye-container-content'>
                <Link to="/"><i class="fa-sharp fa-solid fa-arrow-left fa-3x fa-inverse"></i></Link>
                <div className='projects-top-content-container'>
                    <h1>Tree House Goods</h1>
                    <div className='projects-about'>
                        <span className="component-title">ABOUT</span>
                        <p>Tree House Goods is an e-commerce site that specializes in Housewares. The website includes features such as a user profile, where the user can add/update personal information, manage their wishlists/cart, view wishlist and of course view all available products from the Tree House Goods database. This e-commerce site also allows potential clients the ability to purchase products without making an account and will save the cart's data locally for future easy of use. This project was developed using React, Redux, postgreSQL, Express, and Axios. For more information access: <a href="https://github.com/TeamA-Graceshopper-2022/treehousegoods" target="_blank">Github</a></p>
                        <p>Created by: An Emard, Erinne Grant, Jacob Saddler, and Jenny Wu</p>
                    </div>
                    <img src={Landing} className="Project-Page-Img" />
                    <img src={Products} className="Project-Page-Img" />
                    <div className='WormsEye-Role'>
                        <span className="component-title">MY ROLE</span>
                        <p>For this project, team collaborated on the application UX/UI. I built the backend of this project, which included multiple tables and associations. I contributed heavily to the User's order page and cart management. I also built the view all products page including filtering by product type or keyword.</p>
                    </div>
                    <img src={Design} className="Project-Page-Img" />

                </div>
            </div>
        </div>
        </>
    )
}

export default TreeHouseGoods