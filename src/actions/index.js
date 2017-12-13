export const moviesHasErrored = (bool) => {
  return {
    type: 'MOVIES_HAS_ERRORED',
    hasErrored: bool
  };
}

export const moviesIsLoading = (bool) => {
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading: bool
  };
}

export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
    };
}

export const fetchMovieList = (url) => {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
            dispatch(moviesIsLoading(false));
              return response;
            })
        .then((response) => response.json())
        .then((items) => dispatch(moviesFetchDataSuccess(items)))
        .catch(() => dispatch(moviesHasErrored(true)));
  };
}
