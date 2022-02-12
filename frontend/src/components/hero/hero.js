import React from 'react';
import Brand from '../Sub_Comp/Brand/logo_full_A.png';
import { Link } from 'react-router-dom';
import './hero.css';

function Hero() {
  return (

    <div className='Hero_Main'>

      <div className='Brand'>

        <img 
        src={Brand} 
        alt='bibliotheca logo'
        />

      </div>

    <div className='Brand_Pitch'>

      <h1>
      Books are meant 
      <br/>
      to be shared !
      </h1>

    </div>

    <div className='Sign_Button'>

      <Link to="/signup">
      <button class="SignUp_Button">Sign Up</button>
      </Link>

      <Link to="/signin">
      <button class="SignIn_Button">Sign In</button>
      </Link>

    </div>

  </div>

  );
}

export default Hero;
