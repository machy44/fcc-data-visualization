import React, { Component } from "react";
import { scaleBand, scaleLinear, range, scaleTime } from "d3-scale";
import { max, min } from "d3-array";
import Axes from "../common/axes";
import Bars from "../common/bars";
import Tooltip from "../common/tooltip";

import ResponsiveWrapper from "../hocs/responsiveChartWrapper";

import "./index.scss";
//https://reactjsnews.com/playing-with-react-and-d3
//https://bocoup.com/blog/d3js-and-canvas
//https://medium.freecodecamp.org/d3-and-canvas-in-3-steps-8505c8b27444

export default class BarChart extends Component {
  constructor() {
    super();
    this.xScale = scaleTime();
    this.yScale = scaleLinear();
    this.state = {
      isHovered: false
    };
  }

  render() {
    const { id, data, parentWidth, x, y } = this.props;

    if (!data || !data.length) return <div>Loading...</div>;

    const width = 1000,
      height = 500;
    const margin = { top: 60, left: 65, bottom: 30, right: 40 };
    const axisWidth = width - (margin.left + margin.right);
    const axisHeight = height - (margin.top + margin.bottom);
    // Get values
    let values = data.map(val => val[1]);
    // Get dates
    let dates = data.map(val => val[0]);

    const maxValue = Math.max(...data.map(d => d[1]));

    const xScale = this.xScale
      .domain([new Date(min(dates)), new Date(max(dates))])
      .range([0, axisWidth]);

    // const barWidth = xScale.domain()[1] / data.length;
    const barWidth = 15;
    // Generate vertical scale with values
    const yScale = this.yScale.domain([0, max(values)]).range([axisHeight, 0]);

    return (
      <>
        <Tooltip />
        <svg width={width} height={height} id={id}>
          <Bars
            margin={margin}
            yScale={yScale}
            data={data}
            barWidth={barWidth}
            axisHeight={axisHeight}
            maxValue={maxValue}
          />
          <Axes
            scales={{ xScale, yScale }}
            height={height}
            width={width}
            margin={margin}
          />
        </svg>
      </>
    );
  }
}
