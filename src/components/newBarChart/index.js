import React from "react";
import { ChartCanvas, Chart } from "react-stockcharts";
import { last } from "react-stockcharts/lib/utils";
import { BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitDimensions } from "react-stockcharts/lib/helper";
import { HoverTooltip } from "react-stockcharts/lib/tooltip";
import { timeFormat } from "d3-time-format";

const dateFormat = timeFormat("%Y-%m-%d");

const tooltipContent = () => {
  return ({ currentItem, xAccessor }) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        {
          label: "GDP",
          value: currentItem.value
        }
      ]
    };
  };
};

const BarChart = ({ id, data: initialData, width, height }) => {
  console.log("data", initialData);
  if (!initialData) return <div>Loading...</div>;

  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
    d => d.date
  );
  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    initialData
  );

  const start = xAccessor(last(data));
  const end = xAccessor(data[0]);
  const xExtents = [start, end];
  return (
    <ChartCanvas
      ratio={1}
      id={1}
      // margin={{ left: 40, right: 10, top: 20, bottom: 30 }}
      seriesName="test"
      width={width}
      height={height}
      data={data}
      type={"svg"}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
      panEvent={false}
      zoomEvent={false}
      disableInteraction={true}
    >
      <Chart
        id={1}
        yExtents={d => {
          return [0, d.value];
        }}
      >
        <XAxis
          axisAt="bottom"
          orient="bottom"
          id="x-axis"
          zoomEnabled={false}
        />
        <YAxis axisAt="left" orient="left" id="y-axis" zoomEnabled={false} />
        <BarSeries yAccessor={d => d.value} />
        <HoverTooltip tooltipContent={tooltipContent()} />
      </Chart>
    </ChartCanvas>
  );
};

export default fitDimensions(BarChart);
