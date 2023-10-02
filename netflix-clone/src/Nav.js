import React from 'react'
import "./Nav.css"
import netflixImage from "./images/netflix-image.webp";

function Nav() {
  return (
    <div className='nav'>
        <img src={netflixImage}/>
        <h1>The nav</h1>
    </div>
  )
}

export default Nav