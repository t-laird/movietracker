import movies from '../movies';


describe('movies reducer', () => {
  
  const mockMovieData = [{ title: 'Star Wars' }];
  
  it('should have a default state', () => {
    expect(movies(undefined, {})).toEqual({
      movieIsLoading: false,
      movies: [],
      moviesHasErrored: false});
  });

  it.skip('should give an array of movies when passed info', () => {
    const action = { type: 'MOVIES_FETCH_DATA_SUCCESS', movies: mockMovieData };

    expect(movies(undefined, action).length).toEqual(mockMovieData.length);
  });

  it('should return true if MOVIES_IS_LOADING', () => {
    const action = { type: 'MOVIES_IS_LOADING' };

    expect(movies(undefined, action)).toEqual({
      moviesIsLoading: true,
      movies: [],
      moviesHasErrored: false
    });
  });

  it('should return true if MOVIES_HAS_ERRORED', () => {
    const action = { type: 'MOVIES_HAS_ERRORED' };

    expect(movies(undefined, action)).toEqual({
      moviesIsLoading: false,
      movies: [],
      moviesHasErrored: true
    });
  });
});