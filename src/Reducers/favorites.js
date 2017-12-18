const favorites = (state=[], action) => {
  switch (action.type) {
  case 'UPDATE_FAVORITES':
    return action.favoritesData;
  case 'EMPTY_FAVORITES':
    return [];
  default:
    return state;
  }
};

export default favorites;
