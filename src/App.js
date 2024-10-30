import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSVUploader from './components/csv_upload/CSVUploader';
import FileList from './components/csv_upload/CSVFileList';
import CSVCarousel from './components/carousel/CSVCarousel';
import HeaderSelector from './components/HeaderSelector'; // Import the new component

function App() {
  const [csvFiles, setCsvFiles] = useState([]);   // Store uploaded files
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [xHeader, setXHeader] = useState(null); // State for X header
  const [yHeaders, setYHeaders] = useState([]); // State for Y headers (multiple)

  const handleFileUpload = (fileData, fileName) => {
    setCsvFiles([...csvFiles, { name: fileName, data: fileData }]);
  };

  const handleHeaderClick = (header) => {
    if (!xHeader) {
      setXHeader(header);
    } else if (!yHeaders.includes(header)) {
      setYHeaders([...yHeaders, header]); // Add header to Y array
    } else {
      // Allow deselection of Y headers
      setYHeaders(yHeaders.filter(y => y !== header));
    }
  };

  return (
    <div className="d-flex">
      <FileList csvFiles={csvFiles} onSelectFile={setActiveFileIndex} />
      <div className="flex-grow-1 d-flex flex-column"> {/* Flex column to stack components */}
        <CSVUploader onUpload={handleFileUpload} />
        {csvFiles.length > 0 && (
          <div className="d-flex" style={{ flex: 1 }}> {/* Flex for Carousel and HeaderSelector */}
            <div style={{ flex: 1 }}> {/* Carousel container */}
              <CSVCarousel
                csvFiles={csvFiles}
                activeFileIndex={activeFileIndex}
                setActiveFileIndex={setActiveFileIndex}
                onHeaderClick={handleHeaderClick} // Pass the click handler
              />
            </div>
            <div style={{ width: '250px' }}> {/* Width for HeaderSelector */}
              <HeaderSelector xHeader={xHeader} yHeaders={yHeaders} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
