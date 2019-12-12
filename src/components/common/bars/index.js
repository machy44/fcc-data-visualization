import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { interpolateLab } from "d3-interpolate";

export default class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(["#D3D3D3", "#696969"])
      .interpolate(interpolateLab);
  }

  render() {
    const { yScale, margin, data, barWidth, axisHeight } = this.props;

    return (
      <g>
        {data.map((d, i) => (
          <rect
            className="bar"
            x={i * 3.21 + margin.left + 1}
            y={margin.top + yScale(d[1])}
            width={barWidth}
            height={axisHeight - 1 - yScale(d[1])}
            key={i}
            data-date={d[0]}
            data-gdp={d[1]}
            fill={this.colorScale(d[1])}
          />
        ))}
      </g>
    );
  }
}
