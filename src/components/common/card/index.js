import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

const Body = ({ children }) => <CardBody>{children}</CardBody>;

const Footer = ({ children }) => (
  <CardFooter className="small text-muted">{children}</CardFooter>
);

const Header = ({ id, title, icon }) => (
  <CardHeader>
    <FontAwesomeIcon icon={icon} size="lg" className="chart-icon" />
    <p id={id} className="chart-title">
      {title}
    </p>
  </CardHeader>
);

export default ({ id, title, icon, link, children }) => (
  <Card className="chart-card-wrapper">
    <Header id={id} title={title} icon={icon} />
    <Body>{children}</Body>
    <Footer>{link}</Footer>
  </Card>
);
