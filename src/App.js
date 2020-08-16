import React, { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';
import Pagination from './components/Pagination/Pagination';
import BottomPageAnimation from './components/BottomPageAnimation/BottomPageAnimation';
import Sourse from './components/Sourse/Sourse';


function App() {
  const [activePage, setActivePage] = useState(0)
  const [touchStartY, setTouchStartY] = useState()
  const [touchEvent, setTouchEvent] = useState(false)
  const [touchCurrentDelta, setTouchCurrentDelta] = useState({
    y: 0
  })

  const touchStartHandler = (event) => {   
    setTouchEvent(true) 
    setTouchStartY(event.changedTouches[0].pageY)
  }

  const touchMoveHandler = (event) => {    
    setTouchCurrentDelta({
      y: touchStartY - event.changedTouches[0].pageY,
    })
  }
  
  const touchEndHandler = (event) => {
    setTouchEvent(false)
    setTouchCurrentDelta({
      y: 0
    })
    const touchDeltaY = touchStartY - event.changedTouches[0].pageY
    if(Math.abs(touchDeltaY) > 50) {
      if(touchDeltaY < 0) {
        setActivePage((activePage === 0) ? activePage: activePage  + 1)
      } else {
        setActivePage((activePage === -3) ? activePage: activePage - 1)
      }
    }
  }
  const actualPageNumber = () => {
    return (activePage === -3) ? -2 : activePage
  }

  return (
    <div id="App" onTouchStart = {touchStartHandler} onTouchEnd = {touchEndHandler} 
      onTouchMove = {touchMoveHandler}
    >      
      <div id='pagesContainer' style={{ top: `${window.innerHeight * actualPageNumber() }px` }}>
        <FirstPage activePage={activePage}/>
        <SecondPage activePage={activePage}/>
        <ThirdPage activePage={activePage}/>
      </div>
      <Sourse 
        activeSourse={activePage === -3}
        setActivePage={setActivePage}
      />
      <Pagination activePage={actualPageNumber()}/>
      <BottomPageAnimation 
        activePage={activePage}
        touchCurrentDelta={touchCurrentDelta.y}
        touchEvent={touchEvent}
      />
    </div>
  )

}

export default App;
