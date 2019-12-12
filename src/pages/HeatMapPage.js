import React, { Component } from "react";
import { connect } from "react-redux";

import HeatMapChart from "../components/heatMap";

import { requestHeatMapData } from "../redux/actions/chartActions";

class HeatMapPage extends Component {
  componentDidMount() {
    this.props.requestHeatMapData();
  }
  render() {
    const { loading, data } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }
    // return <TreemapDiagram id="title" title="Treemap Diagram" />;
    return <HeatMapChart data={data} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state.heatMapChart.chartData,
    loading: state.heatMapChart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestHeatMapData: () => {
      dispatch(requestHeatMapData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatMapPage);
