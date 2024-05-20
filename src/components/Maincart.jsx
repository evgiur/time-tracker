import React from 'react';
import '../scss/app.scss';

export default function Maincart() {
  return (
    <div className='main-cart-background'>
      <header>
        <img src="image-jeremy.png" alt="jeremy"></img>
        Report for 
        Jeremy Robson
      </header>
      <list>
        Daily
        Weekly
        Monthly
      </list>  
    </div>
  )
}

