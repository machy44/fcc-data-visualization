import React from "react";
import Axis from "./Axis";
import { axisBottom, axisLeft } from "d3-axis";
import { select } from "d3-selection";

export default ({ scales, margin, height, width }) => {
  const xProps = {
    orient: "Bottom",
    scale: scales.xScale,
    translate: `translate(${margin.left}, ${height - margin.bottom})`,
    tickSize: height - margin.top - margin.bottom
  };

  const yProps = {
    orient: "Left",
    scale: scales.yScale,
    translate: `translate(${margin.left}, ${margin.top})`,
    tickSize: width - margin.left - margin.right
  };
  // <Axis {...xProps} />
  // <Axis {...yProps} />
  const xAxis = axisBottom()
    .scale(scales.xScale)
    .ticks();

  const yAxis = axisLeft()
    .scale(scales.yScale)
    .ticks();

  return (
    <>
      <g
        id="x-axis"
        ref={node => select(node).call(xAxis)}
        transform={xProps.translate}
      />
      <g
        id="y-axis"
        ref={node => select(node).call(yAxis)}
        transform={yProps.translate}
      />
    </>
  );
};
