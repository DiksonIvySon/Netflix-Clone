import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netflixLogo from "./images/netflixLogo-transparent.png";
import avatar2 from "./images/netflix-avatar2.png"

function Nav() {
  const [Show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    }
    else {
        handleShow(false);
    }
  }

  useEffect (() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);

  return (
    <div className={`nav ${Show && "nav_black"}`}>
        <div className='nav_contents'>
            <img className='netflixLogo' src={netflixLogo}/>
            <img className='netflixAvatar' src={avatar2}/>
        </div>
    </div>
  )
}

export default Nav