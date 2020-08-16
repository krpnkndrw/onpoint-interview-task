import React from 'react';
import source_big from '../../img/source_big.png';
import './Sourse.css';

const Sourse = (props) => {
  return (
    <div className={`Sourse page ${props.activeSourse ? '' : 'hide' }`}>
        <div 
            className ={`SourseBackground ${props.activeSourse ? '' : 'hide' }`}
            onClick={() => props.setActivePage(-2)}
        ></div>
        <div className ={`SourseContent ${props.activeSourse ? '' : 'hide' }`}>            
            <img src={source_big} alt='source_big'/>
            <ol>
                <li>Defronzo RA. Diabetes. 2009 Apr;58(4):773-95</li>
                <li>Inzucchi SE, Sherwin RS in: Cecil Medicine 2011</li>
                <li>Stanley S. Schwartz, Solomon Epstein,Barbara E. Corkey, Struan F.A. Grant,James R. Gavin III, and Richard B. Aguilar The Time Is Right
for a New Classification System for Diabetes: Rationale and Implications of the b-Cell–Centric Classification Schema Diabetes Care 2016; 39:179–186 | DOI: 10.2337/dc15-1585</li>
            </ol>
        </div>
    </div>
  );
}

export default Sourse;