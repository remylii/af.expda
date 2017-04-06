import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './main.css';

import App from './pages/App/App';
import Topic from './pages/Topic/Topic';
import Note from './pages/Note/Note';
import NotFound from './pages/Error/NotFound';

const element = document.getElementById('app');

render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/topic" component={Topic} />
        <Route path="/note" component={Note} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , element
);
