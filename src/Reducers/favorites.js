const favorites = (state=[], action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITES':
      return action.favoritesData;
    default:
      return state;
  }
}

export default favorites;
