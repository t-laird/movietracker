import React, { Component } from 'react';
import MovieCatalog from '../MovieContainer/MovieContainer';
import SignIn from '../SignIn/SignIn';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SignIn />
        <MovieCatalog />
      </div>
    )
  }
}
