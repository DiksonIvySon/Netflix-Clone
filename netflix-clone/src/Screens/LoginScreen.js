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
        <div className='loginScreen-body'>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>

            <div className='loginScreen-input'>
                <form>
                    <input type='email' placeholder='Email' name='email' />
                    <button className='loginScreen-getStarted'>GET STARTED</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen