import React from 'react';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
