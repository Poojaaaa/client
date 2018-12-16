import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
