import React from 'react';
import './SignUpScreen.css';

function SignUpScreen() {

  const register = (e) => {
    e.preventDefault();
  }

  const SignIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <button type='submit' onClick={SignIn} >Sign In</button>
        <h4>
          <span className='signUpScreen-gray'>New to Netflix?  </span> 
          <span className='signUpScreen-link' onClick={register}>
           Sign Up Now. 
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen; 