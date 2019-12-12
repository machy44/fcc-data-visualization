import React, { Component } from "react";
//redux
import { connect } from "react-redux";
import { requestScatterPlotData } from "../redux/actions/chartActions";

import ScatterPlot from "../components/scatterPlot";
import Card from "../components/common/card";

class ScatterPlotGraphPage extends Component {
  state = {
    id: "title"
  };

  name = "Doping in Professional Bicycle Racing";

  componentDidMount() {
    this.props.requestScatterPlotData();
  }
  render() {
    const { id } = this.state;
    const { loading, data } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h1 id={id}>{this.name}</h1>
        <h3>
          Built with{" "}
          <a href="https://nivo.rocks/components" target="blank">
            nivo
          </a>
        </h3>
        <Card
          id="scatterplot-graph-card"
          icon="chart-scatter"
          title="chart scatter"
          link={
            <a
              href="https://learn.freecodecamp.org/data-visualization/data-visualization-projects/visualize-data-with-a-scatterplot-graph/"
              target="blank"
            >
              freecodecamp link
            </a>
          }
        >
          <ScatterPlot id="title" title="Scatter Plot Graph" data={data} />
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.scatterPlotChart.chartData,
    loading: state.scatterPlotChart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestScatterPlotData: () => {
      dispatch(requestScatterPlotData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScatterPlotGraphPage);
