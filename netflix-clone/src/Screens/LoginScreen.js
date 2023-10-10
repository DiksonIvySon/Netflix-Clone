import React, { useState } from 'react';
import "./LoginScreen.css";
import netflixLogo from "../images/netflixLogo-transparent.png";
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

  const [SignIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen-background'>
            <img className='loginScreen-logo' src={netflixLogo} alt=''/>
            <button className='loginScreen-button' onClick={() => setSignIn(true)}>Sign In</button>
            <div className='loginScreen-gradient'/>
        </div>
        <div className='loginScreen-body'>
            {SignIn ? (
                <SignUpScreen />
            ) : (
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>

                    <div className='loginScreen-input'>
                        <form>
                            <input type='email' placeholder='Email' name='email' />
                            <button className='loginScreen-getStarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen