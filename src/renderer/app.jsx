import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

// Routing difinition`
const appRouting=(
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="singup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomId" component={Room} />
      </Route>
    </Route>
  </Router>
);
// Routing initialze
if(!location.hash.length){
  location.hash="#/login";
}
// Application drawing
render(appRouting,document.getElementById("app"));

