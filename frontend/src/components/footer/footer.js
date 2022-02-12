import React from 'react';
import dev_logo from '../Sub_Comp/Brand/dev_brand.png';
import './footer.css';

function Footer() {
  return (
    <footer>
      
      <img
      className='Brand_Dev' 
      src={dev_logo} 
      alt='blue fish brand logo'
      /> 
  
      <span
      className='Footer_Span'>
        © 2022
      </span>

      <div className='Social_Links'>
      
      <a
      className='Facebook' 
      href='https://www.facebook.com/AnarKino.LAB'>
        <i class="fab fa-facebook-square" ></i>
      </a>
  
      <a
      className='Instagram'
      href='https://www.instagram.com/sami.belhaj.92'>
        <i class="fab fa-instagram-square"></i>
      </a>
  
      <a
      className='Github' 
      href='https://github.com/samibelhaj92'>
        <i class="fab fa-github-square"></i>
      </a>
  
    </div>

    </footer>
)
  ;
}

export default Footer;
