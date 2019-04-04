import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './components/login';
import BasicLayout from "./components/layouts/BasicLayout";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
