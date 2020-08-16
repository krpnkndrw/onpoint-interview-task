import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  return (
    <div id="Pagination">
        <span className={`dot ${props.activePage === 0 ? 'activeDot' : ''}`}></span>
        <span className={`dot ${props.activePage === -1 ? 'activeDot' : ''}`}></span>
        <span className={`dot ${props.activePage === -2 ? 'activeDot' : ''}`}></span>
    </div>
  );
}

export default Pagination;
