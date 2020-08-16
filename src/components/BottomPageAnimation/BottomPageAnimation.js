import React, { useEffect, useState, useRef } from 'react';
import Arrow from '../../img/Arrow.png'
import shine from '../../img/shine.png'
import shine2 from '../../img/shine2.png'
import './BottomPageAnimation.css';

const BottomPageAnimation = (props) => {
    const [activePageMem, setActivePageMem] = useState(0)
    const [activeBottomPageAnimation, setActiveBottomPageAnimation] = useState(true)
    const countRef = useRef(false);

    useEffect( () => {
        if(props.activePage !== activePageMem){
            setActiveBottomPageAnimation(false)
            countRef.current = setTimeout( () => {
                setActiveBottomPageAnimation(true)
            }, 2000)
            setActivePageMem(props.activePage)
        }
        return () => {
            clearInterval(countRef.current)
          }
    }, [props.activePage])

    useEffect( () => {
        setActivePageMem(props.activePage)
    }, [])

    const shineSize = () => {
        let newSize = props.touchCurrentDelta/20 < 10 ? props.touchCurrentDelta/20 : 10
        return newSize
    }
    return(
        <React.Fragment>
            <div className={`bottomPageAnimation ${activeBottomPageAnimation && (activePageMem !== -2)?'':'hideBottomPageAnimation'}`}>
                <p>Листайте вниз</p>
                <img 
                    src={Arrow} 
                    alt='arrow' 
                    className ='arrow'
                />
            </div>
                <img 
                    className={`shine ${props.touchEvent ? 'hide': ''}`}
                    src={shine} 
                    alt='shine' 
                    style={{height: `${shineSize()}%`}}
                />
                <img 
                    className={`shine2 ${props.touchEvent ? 'hide': ''}`}
                    src={shine2} 
                    alt='shine2' 
                    style={{height: `${shineSize()}%`}}
                />
        </React.Fragment>
    )
}
export default BottomPageAnimation