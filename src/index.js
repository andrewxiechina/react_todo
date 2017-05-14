/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoPage from './containers/TodoPage';
import todoApp from './reducers';


let store = createStore(todoApp);

render(
  <Provider store={store}>
    <TodoPage />
  </Provider>,
  document.getElementById('app')
);
