import { combineReducers } from 'redux';
import movies from './movies';
import SignIn from './SignIn';
import favorites from './favorites';

export default combineReducers({
  movies,
  SignIn,
  favorites
});
