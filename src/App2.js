import React, { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';
import Pagination from './components/Pagination/Pagination';
import BottomPageAnimation from './components/BottomPageAnimation/BottomPageAnimation';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 0,
      touchStartY: null,
      touchCurrentDelta: {y:0}
    }
    this.touchStartHandler = this.touchStartHandler.bind(this)
    this.touchMoveHandler = this.touchMoveHandler.bind(this)
    this.touchEndHandler = this.touchEndHandler.bind(this)
  }
  touchStartHandler = (event) => {    
    this.setState({
      touchStartY: event.changedTouches[0].pageY
    })
  }

  touchMoveHandler = (event) => {
    let newTouchCurrentDelta = {
      y: this.state.touchStartY - event.changedTouches[0].pageY
    }
    this.setState({
      touchCurrentDelta: newTouchCurrentDelta
    })
  }
  
  touchEndHandler = (event) => {
    this.setState({
      touchCurrentDelta: {y:0}
    })
    const touchDeltaY = this.state.touchStartY - event.changedTouches[0].pageY
    if(Math.abs(touchDeltaY) > 50) {
      if(touchDeltaY < 0) {
        this.setState({
          activePage: (this.state.activePage === 0) ? this.state.activePage: this.state.activePage  + 1
        })
      } else {
        this.setState({
          activePage: (this.state.activePage === -2) ? this.state.activePage: this.state.activePage  - 1
        })
      }
    }
  }
  render(){
    return (
      <div id="App" 
        onTouchStart = {this.touchStartHandler} 
        onTouchEnd = {this.touchEndHandler} 
        onTouchMove = {this.touchMoveHandler}
      >      
        <div id='pagesContainer' style={{ top: `${window.innerHeight * this.state.activePage}px` }}>
          <FirstPage activePage={this.state.activePage} ref={(elem) => this.FirstPage = elem}/>
          <SecondPage activePage={this.state.activePage}/>
          <ThirdPage activePage={this.state.activePage}/>
        </div>      
        <Pagination activePage={this.state.activePage}/>
        <BottomPageAnimation 
          activePage={this.state.activePage}
          touchCurrentDelta={this.state.touchCurrentDelta.y}
        />
      </div>
    )
  }
}

export default App;
