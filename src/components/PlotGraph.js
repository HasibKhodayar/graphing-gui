import React from 'react';
import Plot from 'react-plotly.js';

const PlotGraph = ({ xData, yData, yHeaders, graphTitle }) => {
  // Create traces for each Y data set
  const traces = yData.map((data, index) => ({
    x: xData,
    y: data,
    type: 'scatter',
    mode: 'lines+markers',
    name: yHeaders[index] // Name the series
  }));

  return (
    <div>
      <Plot
        data={traces}
        layout={{
          title: graphTitle,
          xaxis: { title: "Title" }, // Use xHeader
          yaxis: { title: "Y-Axis" }, // Use yAxisTitle
        }}
      />
    </div>
  );
};

export default PlotGraph;
