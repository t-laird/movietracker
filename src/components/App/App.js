import React, { Component } from 'react';
import { MovieContainer, SignIn } from '../../components';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SignIn />
        <MovieContainer />
      </div>
    )
  }
}
