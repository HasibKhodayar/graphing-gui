import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSVUploader from './components/csv_upload/CSVUploader';
import FileList from './components/csv_upload/CSVFileList';
import CSVCarousel from './components/carousel/CSVCarousel';
import HeaderSelector from './components/HeaderSelector';
import PlotGraph from './components/PlotGraph';
import './App.css';

function App() {
  const [csvFiles, setCsvFiles] = useState([]);   
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [xHeader, setXHeader] = useState(null);
  const [yHeaders, setYHeaders] = useState([]);
  const [selecting, setSelecting] = useState(null); // Track whether selecting X or Y

  const handleFileUpload = (fileData, fileName) => {
    setCsvFiles([...csvFiles, { name: fileName, data: fileData }]);
  };

  const handleHeaderClick = (header) => {
    if (selecting === 'X') {
      setXHeader(header); // Set X header
    } else if (selecting === 'Y') {
      setYHeaders((prevHeaders) =>
        prevHeaders.includes(header)
          ? prevHeaders.filter((y) => y !== header) // Toggle selection
          : [...prevHeaders, header]
      );
    }
  };

  const currentCsvData = csvFiles[activeFileIndex]?.data || []; // Get data of the active CSV file

  // Extract X and Y data based on selected headers
  const xData = currentCsvData.map(row => row[currentCsvData[0].indexOf(xHeader)]);
  const yData = yHeaders.map(header => currentCsvData.map(row => row[currentCsvData[0].indexOf(header)]));

  return (
    <div className="d-flex">
      <FileList csvFiles={csvFiles} onSelectFile={setActiveFileIndex} />
      <div className="flex-grow-1 d-flex flex-column">
        <CSVUploader onUpload={handleFileUpload} />
        {csvFiles.length > 0 && (
          <div className="d-flex" style={{ flex: 1 }}>
            <div style={{ flex: 1 }}>
              <CSVCarousel
                csvFiles={csvFiles}
                activeFileIndex={activeFileIndex}
                setActiveFileIndex={setActiveFileIndex}
                onHeaderClick={handleHeaderClick}
              />
            </div>
            <HeaderSelector
              xHeader={xHeader}
              yHeaders={yHeaders}
              setSelecting={setSelecting}
              selecting={selecting} // Pass selecting state
              setYHeaders={setYHeaders} // Pass setYHeaders function
            />
          </div>
        )}
        
        {xHeader && yHeaders.length > 0 && (
          <PlotGraph xData={xData} yData={yData} yHeaders={yHeaders} graphTitle={"Title"}/>
        )}
      </div>
    </div>
  );
}

export default App;
