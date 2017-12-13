import React, { Component } from 'react';
import MovieCatalog from '../MovieContainer/MovieContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MovieCatalog />
      </div>
    )
  }
}
