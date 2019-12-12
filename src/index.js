import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//redux
import configureStore, { sagaMiddleware } from "./redux/store/configureStore";
import { Provider } from "react-redux";
import Routes from "./Routes";
//sagas
import rootSaga from "./redux/sagas";
// my pages
import Navigation from "./components/common/navigation";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartBar, faChartScatter } from "@fortawesome/free-solid-svg-icons";
//how to use font awesome https://alligator.io/react/font-awesome/
library.add(faChartBar);

const store = configureStore();
sagaMiddleware.run(rootSaga);

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }

  render() {
    return (
      <Router>
        <>
          <Navigation />
          <div className="content-wrapper">
            <Routes />
          </div>
        </>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
