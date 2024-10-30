import React from 'react';

const CSVTable = ({ data, onHeaderClick }) => {
  const displayedRows = data.slice(1, 16); // Show only 15 rows

  const handleHeaderClick = (header) => {
    if (onHeaderClick) {
      onHeaderClick(header); // Call the function passed as prop
    }
  };

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {data[0].map((col, index) => (
            <th key={index} onClick={() => handleHeaderClick(col)} style={{ cursor: 'pointer' }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {displayedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CSVTable;
