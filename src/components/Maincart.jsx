import React from 'react';
import '../scss/app.scss';
import avatar from '../assets/images/image-jeremy.png';

export default function Maincart() {
  return (
    <div className='main-cart-background'>
      <div className='image-container'>
        <img src={avatar} alt="jeremy"></img>
      </div>
      <header>
        <h1>Report for</h1>
        <h2>Jeremy Robson</h2>
      </header>
      <div> 
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
      
    </div>
  )
}

