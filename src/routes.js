import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import Vocabulary from './components/Vocabulary';
import TodoPage from './components/TodoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Vocabulary}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="todo" component={TodoPage} />
    <Route path="*" component={NotFoundPage}/>
    <Route path="home" component={HomePage} />
  </Route>
);
