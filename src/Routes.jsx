import Home from '@views/Home/Home';
import Login from '@views/Login';
import React from 'react';
import Test from '@views/Test/Test';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={Test} />
    </Switch>
  </Router>
);

export default Routes;
