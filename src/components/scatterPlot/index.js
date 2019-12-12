import React from "react";
import { ResponsiveScatterPlot, ScatterPlot } from "@nivo/scatterplot";
import mockData from "./mockData";

export default ({ data = [] }) => {
  let doping = [];
  let noDoping = [];

  data.forEach(element => {
    console.log("element", element);
    if (element.Doping) {
      doping.push({
        x: element.Year,
        y: element.Time
        // name: elemnt.Name
      });
    } else {
      noDoping.push({
        x: element.Year,
        y: element.Time
        // name: elemnt.Name
      });
    }
  });

  let preparedData = [
    {
      id: "No doping allegations",
      data: [...noDoping]
    },
    {
      id: "Riders with doping allegations",
      data: [...doping]
    }
  ];

  console.log("preparedData", preparedData);
  return (
    <ScatterPlot
      width={600}
      height={400}
      data={preparedData}
      xScale={{
        className: "jureiboban",
        type: "linear",
        min: "auto",
        max: "auto"
      }}
      // yScale={{ type: "time", format: "%h-%m", precision: "day" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto"
      }}
      margin={{
        top: 10,
        right: 10,
        bottom: 36,
        left: 36
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
      // layers={["grid", "axes", "points", "markers", "mesh", "legends"]}
    />
  );
};
