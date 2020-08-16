import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';

const Slider = (props) => {
    const thumbRef = useRef(null)
    const sliderRef = useRef(null)

    const sliderWidth = 640
    const thumbWidth = 43

    const [thumbPosition, setThumbPosition] = useState(0)
    const [deltaX, setDeltaX] = useState(0)
    const [returning, setReturnign] = useState(false)

    const touchStartHandler = (event) => {
        if(!returning){
            setDeltaX(event.changedTouches[0].pageX - thumbRef.current.getBoundingClientRect().x)
        }
    }    
    
    let leftEnd = 0 - thumbWidth/2
    let rigthEnd = sliderWidth + leftEnd
    let sectionLength = (sliderWidth)/3

    const touchMoveHandler = (event) => {
            let sliderX = sliderRef.current.getBoundingClientRect().x
            let nextThumbPosition = event.changedTouches[0].pageX - sliderX - deltaX  

            if (nextThumbPosition >= leftEnd && nextThumbPosition <= rigthEnd){
                setThumbPosition(nextThumbPosition)

                if( nextThumbPosition <=sectionLength){
                    props.setActiveSection(1)
                } else if(nextThumbPosition >sectionLength && nextThumbPosition <= sectionLength*2){
                    props.setActiveSection(2)
                } else {
                    props.setActiveSection(3)
                }
            }  
    }

    const touchEndHandler = () => {
        setReturnign(true)
        if(props.activeSection === 1) {
            setThumbPosition(leftEnd)
        } else if(props.activeSection === 2){
            setThumbPosition(sliderWidth/2 + leftEnd)
        } else {
            setThumbPosition(rigthEnd)
        }
        setTimeout( () => setReturnign(false), 300 )
    }
    
    useEffect( () => {        
        touchEndHandler()
    }, [])

    return (
        <div className='slider'>
            <div 
                className='sliderBody' 
                ref={sliderRef}
                style = {{ width: `${sliderWidth}px` }}
                >
                <div 
                    className={`thumb ${returning ? 'returning' : ''}`}
                    ref={thumbRef}
                    style={{left: `${thumbPosition}px`, width: `${thumbWidth}px`}}   
                    onTouchStart={touchStartHandler}
                    onTouchEnd ={touchEndHandler}                 
                    onTouchMove = {touchMoveHandler}
                >                        
                </div>
                <div 
                    className={`bar ${returning ? 'returning' : ''}`}
                    style={{width: `${thumbPosition>0?thumbPosition-leftEnd: 0}px`}}
                >                    
                </div>
            </div>
            <div className='sliderMarkers'>
                <span>1988</span>
                <span>2009</span>
                <span>2016</span>
            </div>
        </div>
    );
}

export default Slider;