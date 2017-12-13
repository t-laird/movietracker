const moviesIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'MOVIESS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export default moviesIsLoading;
