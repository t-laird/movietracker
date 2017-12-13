const moviesHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'MOVIES_HAS_ERRORED':
      return action.hasErrored;

    default:
    return state;
    }
}

export default moviesHasErrored;
