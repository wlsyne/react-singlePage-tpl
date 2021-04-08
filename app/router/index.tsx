import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const { lazy, Suspense } = React;

const Home = lazy(() => import("../pages/Home/index"));

import Path from "./path";

export default () => (
  <Router>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path={Path.Home}>
          <Home />
        </Route>
        <Redirect to={Path.Home} />
      </Switch>
    </Suspense>
  </Router>
);
