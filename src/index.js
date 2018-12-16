import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
