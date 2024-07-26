import React from 'react';
import '../scss/app.scss';
import work from '../assets/images/icon-work.svg'

export default function Dashboardcard() {
  return (
    <div className='activity'>
    <img src={work} alt="work-icon"></img>
      <div className='small-block'>
        
        <div className='top-row'>
          
          <div className='activity-type'>Work</div>
          
          <div className='dots-menu'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          
        </div>

        <div className='bottom-row'>
          
          <div className='time-amount'>
            32hrs {/*props */}
          </div>

          <div className='last-period'>
            Last week - 36hrs {/* props */}
          </div>

        </div>
      </div>
    </div>
  )
}
