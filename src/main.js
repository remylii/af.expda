import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './main.css';

import App from './pages/App/App';
import Facility from './pages/Facility/Facility';
import NotFound from './pages/Error/NotFound';

const element = document.getElementById('app');

render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/facility" component={Facility} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , element
);
