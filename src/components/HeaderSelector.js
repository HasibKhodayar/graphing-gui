import React from 'react';

const HeaderSelector = ({ xHeader, yHeaders }) => {
  return (
    <div className="header-selector">
      <h3>X</h3>
      <div className="selected-header">
        {xHeader || "Select X Header"}
      </div>
      <h3>Y</h3>
      <div className="selected-headers">
        {yHeaders.length > 0 ? yHeaders.join(', ') : "Select Y Headers"}
      </div>
    </div>
  );
};

export default HeaderSelector;
