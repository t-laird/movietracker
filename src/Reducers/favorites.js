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

// const todosReducer = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return [ ...state, action.todo ]
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.id)
//     default:
//       return state;
//   };
// };
//
// export default todosReducer;
