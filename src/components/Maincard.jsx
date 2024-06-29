import React from 'react';
import '../scss/app.scss';
import avatar from '../assets/images/image-jeremy.png';

export default function Maincard() {
  return (
    <div className='main-card'>
      
        <div className='image-container'>
          <img src={avatar} alt="jeremy"></img>
  
          <header>
            <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
          </header>

        </div>
    
        <div className='buttons'>
          <button id="daily-button">Daily</button>
          <button id="weekly-button">Weekly</button>
          <button id="monthly-button">Monthly</button>
        </div>

    </div>
  )
}

