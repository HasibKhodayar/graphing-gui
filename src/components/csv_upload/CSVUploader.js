import React from 'react';
import { FaUpload } from 'react-icons/fa'; // Import the upload icon
import './CSVUploader.css'; // Import CSS for styling

const CSVUploader = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const csvData = data.split('\n').map((row) => row.split(',')); // Split the CSV data
        onUpload(csvData, file.name); // Call onUpload with the parsed data
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="csv-uploader">
      <input
        type="file"
        accept=".csv"
        id="csv-upload-input"
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the default file input
      />
      <label htmlFor="csv-upload-input" className="upload-area">
        <FaUpload size={50} /> {/* Upload icon */}
        <p>Drag and drop your CSV file here, or click to upload</p>
      </label>
    </div>
  );
};

export default CSVUploader;
