import React from 'react';
import '../scss/app.scss';

export default function Dashboardcard({title, timeframes, imgSrc }) {
  
  return (
    <div className={`activity ${title}`}>
    <img src={imgSrc} alt="icon"></img>
      <div className='small-block'>
        
        <div className='top-row'>
          
          <div className='activity-type'>{title}</div>
          
          <div className='dots-menu'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          
        </div>

        <div className='bottom-row'>
          
          <div className='time-amount'>
            {timeframes.weekly.current}hrs
          </div>

          <div className='last-period'>
            Last week - {timeframes.weekly.previous}hrs 
          </div>

        </div>
      </div>
    </div>
  )
}
