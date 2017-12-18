const initialState = {
  movieIsLoading: false,
  movies: [],
  moviesHasErrored: false
};

const movies = (state = initialState, action) => {
  switch (action.type) {
  case 'MOVIES_FETCH_DATA_SUCCESS':
    return { ...state,
      moviesIsLoading: false,
      movies: action.movies.results,
      moviesHasErrored: false
    };
  case 'MOVIES_IS_LOADING':
    return { ...state,
      moviesIsLoading: true,
      movies: [],
      moviesHasErrored: false
    };
  case 'MOVIES_HAS_ERRORED':
    return { ...state,
      moviesIsLoading: false,
      movies: [],
      moviesHasErrored: true
    };
  default:
    return state;
  }
};

export default movies;
