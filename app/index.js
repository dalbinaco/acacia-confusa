import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Acacia from './components/Acacia';

require('./assets/styles/main.scss');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Acacia} />
    </Route>
  </Router>
), document.getElementById('app'))
