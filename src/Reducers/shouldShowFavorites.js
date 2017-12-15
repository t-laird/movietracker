const shouldShowFavorites = (state = false, action) => {
  switch (action.type) {
  case 'SHOW_FAVORITES':
    return action.shouldShowFavorites;
  default:
    return state;
  }
};

export default shouldShowFavorites;
