import React, { Component } from 'react';
import { MovieContainer, SignIn, Header} from '../../components';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route path="/" component={MovieContainer} />
        <Route path="/signin" component={SignIn} />
      </div>
    );
  }
}
