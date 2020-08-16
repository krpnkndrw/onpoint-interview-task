import React from 'react';
import Pulse from '../Pulse/Pulse'
import './FirstPage.css';

const FirstPage = () => {
  return (
    <div id="FirstPage" className='page'>
        <h1>Всегда ли цели терапии СД2 на поверхности?</h1>
        <Pulse />
        <Pulse />
        <Pulse />
        <Pulse />
        <p>Цель по HbA1 c</p>
        <p>Гипогликемия</p>
        <p>Осложнения СД</p>
        <p>СС риски</p>        
    </div>
  );
}

export default FirstPage;
