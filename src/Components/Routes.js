import React from "react";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/sign-in">
          Signin
        </Route>
        <Route path="/sign-up"> Signup </Route>
      </Switch>
    </div>
  );
}

export default Routes;
