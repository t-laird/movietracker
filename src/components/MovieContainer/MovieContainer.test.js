/* eslint-disable max-len */

import React from 'react';
import  { 
  MovieContainer, 
  mapStateToProps, 
  mapDispatchToProps 
} from './MovieContainer';
import { shallow } from 'enzyme';

describe('MovieContainer tests', () => {
  let movieContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      location: {},
      movies: {movies: [{ title: "Movie", id: 57203}]},
      hasErrored: false,
      isLoading: false,
      userData: { error: false, signedIn: true, userData: { email: "123", id: 2, name: "123" }},
      favorites: [{ title: "Movie", id: 12345}],
      fetchMovieList: jest.fn()
    };
    movieContainer = shallow(
      <MovieContainer {...mockProps} />
    );
  });

  it('should match the snapshot', () => {
    expect(movieContainer).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(movieContainer).toBeDefined();
  });

  it('should mount with the correct elements', () => {
    const expectedSectionLength = 1;

    expect(movieContainer.find('section').length).toEqual(expectedSectionLength);
  });
});

describe('mapStateToProps tests', () => {

  it('should pull movies from the store', () => {
    const mockStore = {
      movies: [{ title: "Movie", id: 12345}, { title: "Movie", id: 67890 }],
      favorites: [{ title: "Movie", id: 67890}, {title: "Movie", id: 15834}]
    };
    
    const result = mapStateToProps(mockStore);
    expect(result.movies).toEqual(mockStore.movies);
    expect(result.favorites).toEqual(mockStore.favorites);
  });

  it('should pull proper error/loading status from the store', () => {
    const mockStore = {
      moviesHasErrored: false,
      moviesIsLoading: false
    };

    const result = mapStateToProps(mockStore);

    expect(result.hasErrored).toEqual(mockStore.moviesHasErrored);
    expect(result.isLoading).toEqual(mockStore.moviesIsLoading);
  });

  it('should pull a good user object from the store', () => {
    const mockStore = {
      SignIn: {
        error: false, signedIn: true, userData: { email: "123", id: 2, name: "123" }      
      }
    };

    const result = mapStateToProps(mockStore);

    expect(result.userData).toEqual(mockStore.SignIn);
  });
});

describe('map dispatch to props', () => {
  it('should map the fetchMovieList function to dispatch', () => {
    const mockDispatch = jest.fn();

    const result = mapDispatchToProps(mockDispatch);
    result.fetchMovieList();

    expect(mockDispatch).toHaveBeenCalled();
  });
});