import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import SpanningTable from "../output/SpanningTable";
import NotFound from "./NotFound";
//import CalculatedOutput from "./CalculatedOutput";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/result" component={SpanningTable} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
