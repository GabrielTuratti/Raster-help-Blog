import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import adm from "./pages/adm/adm";
import release from "./pages/release/release";
import Login from "./pages/Login/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/adm" component={adm} />
        <Route path="/release" component={release} />
        <Route path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
