import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import Carusel from '../Carusel/Carusel'
import './ThirdPage.css'

const ThirdPage = () => {
    const [activeSection, setActiveSection] = useState(3)
  return (
    <div id="ThirdPage" className='page'>
        <Carusel 
          activeSection={activeSection}
        /> 
        <Slider 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
    </div>
  );
}

export default ThirdPage;
