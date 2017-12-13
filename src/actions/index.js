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
};

export const signInAttempt = (email, password) => {
  return async (dispatch) => {
    const initialResponse = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    
    if (initialResponse.status > 400) {
      console.log('failure');
      return dispatch(signInFailure('user not found'));
    }

    const userData = await initialResponse.json();

    return dispatch(signInSuccess(userData));
  }
}


export const signInSuccess = async (userObject) => {

  return {
    type: 'SIGNIN_SUCCESS',
    userObject
  };
};

export const signInFailure = (errorMessage) => {
  return {
    type: 'SIGNIN_FAILURE',
    errorMessage
  }
};
