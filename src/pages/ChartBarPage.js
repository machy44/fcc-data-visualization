import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestChartData } from "../redux/actions/chartActions";
import Card from "../components/common/card";
import BarChart from "../components/newBarChart";
import { prepareDataForBar } from "../redux/selectors/barChartSelector";

class ChartBarPage extends Component {
  state = {
    id: "title"
  };

  componentDidMount() {
    this.props.requestChartData();
  }
  render() {
    const { id } = this.state;
    const { chartData, loading, name } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h1 id={id}>{name}</h1>
        <h3>
          Built with{" "}
          <a href="https://github.com/rrag/react-stockcharts" target="blank">
            react-stockcharts
          </a>
        </h3>
        <Card
          id="bar-chart-card"
          icon="chart-bar"
          title="chart bar"
          link={
            <a
              href="https://learn.freecodecamp.org/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart"
              target="blank"
            >
              freecodecamp link
            </a>
          }
        >
          <BarChart data={chartData} x={0} y={0} />
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    chartData: prepareDataForBar(state.barChart.barChartData.data),
    loading: state.barChart.loading,
    name: state.barChart.barChartData.name
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestChartData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartBarPage);
