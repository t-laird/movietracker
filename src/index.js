import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//import MovieIndex from './components/MovieIndex';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
//import configureStore from './store/configureStore';
import Store from './Store';

ReactDOM.render(
  <Provider store={ Store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
