const favorites = (state=[], action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITES':
      return action.favoritesData
    // console.log('movies-favReducer-toggling-Fav: ', action.movie.title)
    // let stateSet = new Set([...state])
    // if (stateSet.has(action.movie)) {
    //   stateSet.add(action.movie)
    // } else {
    //   stateSet.add(action.movie)
    // }
    // const ArrayFromSet = [...stateSet]
    // return ArrayFromSet

    default:
      return state;
  }
}

export default favorites;
