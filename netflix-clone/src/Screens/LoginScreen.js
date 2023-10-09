import React from 'react';
import "./LoginScreen.css";
import netflixLogo from "../images/netflixLogo-transparent.png";

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen-background'>
            <img className='loginScreen-logo' src={netflixLogo} alt=''/>
            <button className='loginScreen-button'>Sign In</button>
            <div className='loginScreen-gradient'/>
        </div>
    </div>
  )
}

export default LoginScreen