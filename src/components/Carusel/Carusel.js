import React from 'react';
import tab_1 from '../../img/tab_1.png'
import tab_2 from '../../img/tab_2.png'
import tab_3 from '../../img/tab_3.png'
import ice from '../../img/ice.png';
import './Carusel.css';

const Carusel = (props) => {
  return (
    <div className='carusel' style={{ left: `${-window.innerWidth * (props.activeSection - 1)}px` }}>
        <div className='caruselPage'>
            <h3>Звенья патогенеза СД2</h3>
            <img src={tab_1} alt='tab_1' className='tab_1'></img> 
            <div className='iceContainer'>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
            </div> 
        </div>
        <div className='caruselPage'>
            <h3>Смертельный октет</h3>
            <img src={tab_2} alt='tab_2' className='tab_2'></img>
            <div className='iceContainer'>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
            </div> 
        </div>
        <div className='caruselPage'>
            <h3>Звенья патогенеза СД2</h3>
            <img src={tab_3} alt='tab_3' className='tab_3'></img>
            <div className='iceContainer'>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
              <img src={ice} alt='ice' className='ice'/>
            </div> 
        </div>
    </div> 
  );
}

export default Carusel;
