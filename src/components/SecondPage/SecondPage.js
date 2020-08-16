import React from 'react';
import ice from '../../img/ice.png';
import './SecondPage.css';

const SecondPage = (props) => {
    const addParalax = () => {
        return props.activePage === -1 ? 'activeParallax' : null
    }
  return (
    <div id="SecondPage" className='page'>
        <h2 className={addParalax()}>
            Основа терапии - патогенез СД2
        </h2>
        <img src={ice} alt='ice' className={`ice ${addParalax()}`}/>
        <img src={ice} alt='ice' className={`ice ${addParalax()}`}/>
        <img src={ice} alt='ice' className={`ice ${addParalax()}`}/>
        <img src={ice} alt='ice' className={`ice ${addParalax()}`}/>
    </div>
  );
}

export default SecondPage;
