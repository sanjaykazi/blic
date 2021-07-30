import React from 'react'
import './Banner.css'
import Logo from './logo.jpg';
function Banner() {
    return (
        <div className='banner'>
            
   <a class="navbar-brand" href="#">
    <img src={Logo} alt="Logo" style={{transform:'scale(0.7)'}} />
  </a>
        
        </div>
    )
}

export default Banner
