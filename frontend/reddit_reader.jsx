import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

const App = ({ store }) => (
  <Provider store={store}>
    <h1>Reddit Reader</h1>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<App store={store} />, document.getElementById('index'));

  window.store = store;
});
