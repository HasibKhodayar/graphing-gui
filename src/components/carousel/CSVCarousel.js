import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CSVTable from '../CSVTable';
import './CSVCarousel.css';

const CSVCarousel = ({ csvFiles, activeFileIndex, setActiveFileIndex, onHeaderClick }) => {
  const goToPrevious = () => {
    setActiveFileIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : csvFiles.length - 1));
  };

  const goToNext = () => {
    setActiveFileIndex((prevIndex) => (prevIndex < csvFiles.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="csv-carousel-container">
      {/* Display the name of the currently selected CSV file above the carousel */}
      <div className="current-file-name">
        {csvFiles.length > 0 ? csvFiles[activeFileIndex].name : "No CSV file selected"}
      </div>
      <button className="carousel-nav left" onClick={goToPrevious}>
        &lt;
      </button>
      <Carousel
        activeIndex={activeFileIndex}
        onSelect={setActiveFileIndex}
        controls={false}
        indicators={false}
        interval={null}
      >
        {csvFiles.map((file, index) => (
          <Carousel.Item key={index}>
            <div className="scroll-container">
              <CSVTable data={file.data} onHeaderClick={onHeaderClick} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <button className="carousel-nav right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default CSVCarousel;
