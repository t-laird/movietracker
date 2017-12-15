export const moviesHasErrored = (bool) => {
  return {
    type: 'MOVIES_HAS_ERRORED',
    hasErrored: bool
  };
};

export const moviesIsLoading = (bool) => {
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading: bool
  };
};

export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
    };
};

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
      })
    });

    
    if (initialResponse.status >= 400) {
      console.log('failure');
      return dispatch(signInFailure('user not found'));
    }

    const userData = await initialResponse.json();

    return dispatch(signInSuccess(userData));
  };
};


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
  };
};

export const toggleFavorites = (movie) => {
  console.log('toggleFavorites', movie)
  return{
    type: 'TOGGLE_FAVORITES',
    movie
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const signUpAttempt = (name, email, password) => {
  return async (dispatch) => {
    const initialResponse = await fetch('/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    });
    if (initialResponse.status > 400){
      const responseError = await initialResponse.json();
      const errorRegex = new RegExp(/.+\)=/, 'g');
      const formatError = responseError.error.replace(errorRegex, '');

      return dispatch(signUpFailure(formatError));
    } else {
      const newUserId = await initialResponse.json();

      return dispatch(signUpSuccess(newUserId.id));
    }
  }
}

export const signUpFailure = (error) => {
  console.log(error);
  return {
    type: "SIGN_UP_FAILURE",
    error
  }
}

export const signUpSuccess = async (id) => {
  const allUsers = await fetch('/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const userData = await allUsers.json();
  const newUser = userData.data.find( user => user.id === id);
  console.log(newUser);
  return {
    type: "SIGN_UP_SUCCESS",
    newUser
  }
}
