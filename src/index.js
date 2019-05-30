import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "../src/assets/css/demo.css";
import "../src/assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
