import React from 'react';
import First from '../Sub_Comp/Brand/picto_1st.png';
import Second from '../Sub_Comp/Brand/picto_2nd.png';
import Third from '../Sub_Comp/Brand/picto_3rd.png';
import Fourth from '../Sub_Comp/Brand/picto_4th.png';
import Fifth from '../Sub_Comp/Brand/picto_5th.png';
import Sixth from '../Sub_Comp/Brand/picto_6th.png';
import Navigation from '../navbar/navbar';

import './menu.css';

function Menu() {
    
   

  return (

<div className='Menu_Main'>

  <div className='Menu_FirstBlock'>

  <img
    src={First} 
    alt='1st picto'
    />

    <img
    src={Second} 
    alt='2nd picto'
    />

      <img
    src={Third} 
    alt='3rd picto'
    />
    
  </div>

  <div className='Navigation'>

    <Navigation/>

  </div>

  <div className='Menu_SecondBlock'>

    <img
    src={Fourth} 
    alt='4th picto'
    />

    <img
    src={Fifth} 
    alt='5th picto'
    />

      <img
    src={Sixth} 
    alt='6th picto'
    />

  </div>

</div>

  );
}

export default Menu;
