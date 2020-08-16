import React from 'react';
import './Pulse.css';

const Pulse = () => {
    return(
        <div className="pulse">
        <svg className="pulse-svg" width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <linearGradient id="gradient-linear" x1="50%" y1="100%" x2="50%" y2="0" >
            <stop offset="0" stopColor="#dd791c"></stop>
            <stop offset="100%" stopColor="#cf1437"></stop>
        </linearGradient>
        <radialGradient id="gradient-radial">
            <stop offset="0" stopColor="#dd791c" stopOpacity='1'></stop>
            <stop offset="100%" stopColor="#cf1437" stopOpacity='1'></stop>
        </radialGradient>
        <radialGradient id="gradient-radial2">
            <stop offset="0" stopColor="#dd791c" stopOpacity='1'></stop>
            <stop offset="100%" stopColor="#cf1437" stopOpacity='1'></stop>
        </radialGradient> 
        <radialGradient id="gradient-radial3">
            <stop offset="0" stopColor="#dd791c" stopOpacity='1'></stop>
            <stop offset="100%" stopColor="#cf1437" stopOpacity='1'></stop>
        </radialGradient> 
        <circle className="circle" fill="url(#gradient-radial)" stroke="url(#gradient-linear)" strokeWidth="2" cx="25" cy="25" r="0%"></circle>
        <circle className="circle" fill="url(#gradient-radial2)" stroke="url(#gradient-linear)" strokeWidth="2" cx="25" cy="25" r="0%"></circle>
        <circle className="circle" fill="url(#gradient-radial3)" stroke="url(#gradient-linear)" strokeWidth="2" cx="25" cy="25" r="0%"></circle>
        </svg>
    </div>
    )
}
export default Pulse 