import { combineReducers } from 'redux';
import movies from './movies';
import moviesHasErrored from './moviesHasErrored';
import moviesIsLoading from './moviesIsLoading';
import SignIn from './SignIn';
import favorites from './favorites';


export default combineReducers({
  movies,
  moviesHasErrored,
  moviesIsLoading,
  SignIn,
  favorites
});
