import { combineReducers } from "redux";
import chartReducer, {
  scatterPlotReducer,
  heatMapReducer
} from "./chartReducer";

export default combineReducers({
  barChart: chartReducer,
  scatterPlotChart: scatterPlotReducer,
  heatMapChart: heatMapReducer
});
