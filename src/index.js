import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import MovieIndex from './components/MovieIndex';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
