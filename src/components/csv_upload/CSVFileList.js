import React from 'react';
import './CSVFileList.css'; // Import the CSS for styling

const CSVFileList = ({ csvFiles, onSelectFile }) => {
  return (
    <div className="csv-file-list">
      <div className="csv-file-header">CSV Files</div> {/* Header for the file list */}
      {csvFiles.map((file, index) => (
        <div
          key={index}
          className="csv-file-item"
          onClick={() => onSelectFile(index)} // Use onSelectFile instead of setActiveFileIndex
        >
          {file.name}
        </div>
      ))}
    </div>
  );
};

export default CSVFileList;
