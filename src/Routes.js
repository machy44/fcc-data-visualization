import React from "react";
import { Route } from "react-router-dom";
//my pages
import ChartBarPage from "./pages/ChartBarPage";
import ScatterPlotGraphPage from "./pages/ScatterPlotGraphPage";
import HeatMapPage from "./pages/HeatMapPage";
import ChoroplethMapPage from "./pages/ChoroplethMapPage";
import TreemapDiagramPage from "./pages/TreemapDiagramPage";
import routes from "./constants/routes";

const {
  BAR_CHART,
  SCATTER_PLOT_GRAPH,
  HEAT_MAP,
  CHOROPLETH_MAP,
  TREEMAP_DIAGRAM
} = routes;

const Routes = () => (
  <>
    <Route path={BAR_CHART} exact component={ChartBarPage} />
    <Route path={SCATTER_PLOT_GRAPH} exact component={ScatterPlotGraphPage} />
    <Route path={HEAT_MAP} exact component={HeatMapPage} />
    <Route path={CHOROPLETH_MAP} exact component={ChoroplethMapPage} />
    <Route path={TREEMAP_DIAGRAM} exact component={TreemapDiagramPage} />
  </>
);

export default Routes;
