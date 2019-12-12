import {
  REQUEST_CHART_DATA,
  RECEIVE_CHART_DATA,
  REQUEST_SCATTERPLOT_CHART_DATA,
  RECEIVE_SCATTERPLOT_CHART_DATA,
  REQUEST_HEATMAP_CHART_DATA,
  RECEIVE_HEATMAP_CHART_DATA
} from "../actionTypes";

export const requestChartData = () => ({ type: REQUEST_CHART_DATA });
export const receiveChartData = data => ({ type: RECEIVE_CHART_DATA, data });

export const requestScatterPlotData = () => ({
  type: REQUEST_SCATTERPLOT_CHART_DATA
});
export const receiveScatterPlotData = data => ({
  type: RECEIVE_SCATTERPLOT_CHART_DATA,
  data
});

export const requestHeatMapData = () => ({
  type: REQUEST_HEATMAP_CHART_DATA
});
export const receiveHeatMapData = data => ({
  type: RECEIVE_HEATMAP_CHART_DATA,
  data
});
