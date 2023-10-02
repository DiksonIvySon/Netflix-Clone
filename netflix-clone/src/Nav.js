import React from 'react'
import "./Nav.css"
import netflixLogo from "./images/netflixLogo-transparent.png";
import avatar2 from "./images/netflix-avatar2.png"

function Nav() {
  return (
    <div className='nav nav_black'>
        <div className='nav_contents'>
            <img className='netflixLogo' src={netflixLogo}/>
            <img className='netflixAvatar' src={avatar2}/>
        </div>
    </div>
  )
}

export default Nav