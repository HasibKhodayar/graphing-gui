import React from 'react';
import Plot from 'react-plotly.js';

const PlotGraph = ({ xData, yData }) => {
  // Prepare the data for Plotly
  const plotData = yData.map((yValues, index) => ({
    x: xData, // Use the xData passed from App.js
    y: yValues, // Use the corresponding yValues for each header
    mode: 'lines+markers', // Change to 'lines', 'markers', or 'lines+markers' based on your preference
    type: 'scatter',
    name: `Y Data ${index + 1}`, // Label for the legend
  }));

  return (
    <div>
      <Plot
        data={plotData}
        layout={{
          title: 'Plotly Graph',
          xaxis: { title: 'X Values' },
          yaxis: { title: 'Y Values' },
          showlegend: true,
        }}
      />
    </div>
  );
};

export default PlotGraph;
