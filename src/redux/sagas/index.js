import { effects } from "redux-saga";
import {
  REQUEST_CHART_DATA,
  REQUEST_SCATTERPLOT_CHART_DATA,
  REQUEST_HEATMAP_CHART_DATA
} from "../actionTypes";
import {
  receiveChartData,
  receiveScatterPlotData,
  receiveHeatMapData
} from "../actions/chartActions";
import apiCall from "../../api";
import {
  fccChartBarUrl,
  fccScatterPlotChartUrl,
  fccHeatMapChartUrl
} from "../../constants/urls";

const { call, put, takeLatest, all, takeEvery } = effects;

// const getChartData = () => apiCall();
export function* fetchChartDataSaga() {
  try {
    const data = yield call(apiCall, "GET", fccChartBarUrl);
    yield put(receiveChartData(data));
  } catch (e) {
    yield put({ type: "RECEIVE_CHART_DATA_FAILED", message: e.message });
  }
}

export function* fetchScatterPlotSaga() {
  try {
    const data = yield call(apiCall, "GET", fccScatterPlotChartUrl);
    yield put(receiveScatterPlotData(data));
  } catch (e) {
    yield put({ type: "RECEIVE_SCATTERPLOT_DATA_FAILED", message: e.message });
  }
}

export function* fetchHeatMapData() {
  try {
    const data = yield call(apiCall, "GET", fccHeatMapChartUrl);
    yield put(receiveHeatMapData(data));
  } catch (e) {
    yield put({ type: "RECEIVE_HEATMAP_DATA_FAILED", message: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(REQUEST_CHART_DATA, fetchChartDataSaga),
    yield takeLatest(REQUEST_SCATTERPLOT_CHART_DATA, fetchScatterPlotSaga),
    yield takeLatest(REQUEST_HEATMAP_CHART_DATA, fetchHeatMapData)
  ]);
}
