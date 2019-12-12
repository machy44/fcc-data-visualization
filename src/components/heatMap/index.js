import React from "react";
import { genBins } from "@vx/mock-data";
import { scaleLinear } from "@vx/scale";
import { HeatmapRect } from "@vx/heatmap";

export default ({ data }) => {
  const mockData = genBins(16, 16);
  console.log("mockData", mockData);
  console.log("data heatmap", data);

  // utils
  const max = (mockData, value = d => d) => Math.max(...data.map(value));
  const min = (mockData, value = d => d) => Math.min(...data.map(value));

  // accessors
  const bins = d => d.bins;
  const count = d => d.count;

  console.log("max", max);
  console.log("min", min);
  // const newData =
  return (
    <svg width={300} height={300}>
      <HeatmapRect
        data={data}
        // xScale={xScale}
        // yScale={yScale}
        // colorScale={rectColorScale}
        // opacityScale={opacityScale}
        // binWidth={binWidth}
        // binHeight={binWidth}
        gap={2}
      >
        {heatmap => {
          return heatmap.map(bins => {
            return bins.map(bin => {
              return (
                <rect
                  key={`heatmap-rect-${bin.row}-${bin.column}`}
                  className="vx-heatmap-rect"
                  width={bin.width}
                  height={bin.height}
                  x={bin.x}
                  y={bin.y}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                  onClick={event => {
                    const { row, column } = bin;
                    alert(JSON.stringify({ row, column, ...bin.bin }));
                  }}
                />
              );
            });
          });
        }}
      </HeatmapRect>
    </svg>
  );
};
