import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink as NavLinkReactStrap,
  NavbarToggler,
  Collapse
} from "reactstrap";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../../../constants/routes";

import "./index.scss";

const {
  BAR_CHART,
  SCATTER_PLOT_GRAPH,
  HEAT_MAP,
  CHOROPLETH_MAP,
  TREEMAP_DIAGRAM
} = routes;

const CustomNavItem = ({ to, text }) => (
  <NavItem>
    <NavLink to={to} exact activeClassName="active">
      <NavLinkReactStrap>{text}</NavLinkReactStrap>
    </NavLink>
  </NavItem>
);

export default class Navigation extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={this.toggle} className="mr-2" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CustomNavItem to={BAR_CHART} text="Bar Chart" />
            <CustomNavItem to={SCATTER_PLOT_GRAPH} text="Scatter Plot Graph" />
            <CustomNavItem to={HEAT_MAP} text="Heat Map" />
            <CustomNavItem to={CHOROPLETH_MAP} text="Choropleth Map" />
            <CustomNavItem to={TREEMAP_DIAGRAM} text="Treemap Diagram" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  isOpen: PropTypes.bool
};
