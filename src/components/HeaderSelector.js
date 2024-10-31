import React from 'react';
import './HeaderSelector.css';

const HeaderSelector = ({ xHeader, yHeaders, setSelecting, selecting, setYHeaders }) => {
  const handleHeaderClick = (axis) => {
    if (selecting === axis) {
      setSelecting(null); // Deselect if clicking the already selected header
    } else {
      setSelecting(axis); // Select the new header
    }
  };

  const handleDeselectYHeader = (headerToRemove) => {
    setYHeaders((prevHeaders) => prevHeaders.filter(header => header !== headerToRemove)); // Remove the header
  };

  return (
    <div className="header-selector-box">
      <div
        onClick={() => handleHeaderClick('X')}
        className={`header-select x-header ${selecting === 'X' ? 'selected' : ''}`}
      >
        <strong>X Axis:</strong>
        <div className="x-header-item">{xHeader || 'Select X Header'}</div>
      </div>
      <div
        onClick={() => handleHeaderClick('Y')}
        className={`header-select y-header ${selecting === 'Y' ? 'selected' : ''}`}
      >
        <strong>Y Axis:</strong>
        <div className='y-header-items'> {/* Changed class to allow for vertical stacking */}
          {yHeaders.length > 0
            ? yHeaders.map((header, index) => (
                <div key={index} className="y-header-item">
                  <span>{header}</span>
                  <button className='deselect-button' onClick={() => handleDeselectYHeader(header)}>x</button> {/* Deselect button */}
                </div>
              ))
            : 'Select Y Headers'}
        </div>
      </div>
    </div>
  );
};

export default HeaderSelector;
