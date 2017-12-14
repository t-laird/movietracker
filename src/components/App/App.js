import React, { Component } from 'react';
import { MovieContainer, SignIn, Header} from '../../components';
import { Route, Switch } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" component={MovieContainer} />
        <Route path="/signin" component={SignIn} />
      </div>
    )
  }
}
