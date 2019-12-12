import initialState from "../initialState";
import {
  RECEIVE_CHART_DATA,
  REQUEST_CHART_DATA,
  REQUEST_SCATTERPLOT_CHART_DATA,
  RECEIVE_SCATTERPLOT_CHART_DATA,
  REQUEST_HEATMAP_CHART_DATA,
  RECEIVE_HEATMAP_CHART_DATA
} from "../actionTypes";

export default function chartReducer(
  { barChartData, loading } = initialState.barChart,
  { type, data }
) {
  switch (type) {
    case REQUEST_CHART_DATA: {
      return { barChartData: { ...data }, loading: true };
    }
    case RECEIVE_CHART_DATA: {
      return { barChartData: { ...data }, loading: false };
    }
    default:
      return { barChartData: { ...data }, loading: false };
  }
}

export function scatterPlotReducer(
  { chartData, loading } = initialState.scatterPlotChart,
  { type, data }
) {
  switch (type) {
    case REQUEST_SCATTERPLOT_CHART_DATA: {
      return { loading: true };
    }
    case RECEIVE_SCATTERPLOT_CHART_DATA: {
      return { chartData: [...data], loading: false };
    }
    default:
      return { chartData: [], loading: false };
  }
}

export function heatMapReducer(
  state = initialState.heatMapChart,
  { type, data }
) {
  switch (type) {
    case REQUEST_HEATMAP_CHART_DATA: {
      return { ...state, loading: true };
    }
    case RECEIVE_HEATMAP_CHART_DATA: {
      return { ...state, chartData: { ...data }, loading: false };
    }
    default:
      return state;
  }
}
