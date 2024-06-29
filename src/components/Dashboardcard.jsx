import React from 'react';
import '../scss/app.scss';


export default function Activitycard() {
  return (
    <div className='activity-card'>
      {/* <img src={work} alt="jeremy"></img> */}
      Work
      <div className='small-block'>
        <div className='dots-menu'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

        <div className='time-amount'>
          32hrs {/*props */}
        </div>

        <div className='last-period'>
          Last week - 36hrs {/* props */}
        </div>
      </div>
      
    </div>
  )
}
