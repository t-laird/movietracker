import { combineReducers } from 'redux';
import movies from './movies';
import moviesHasErrored from './moviesHasErrored';
import moviesIsLoading from './moviesIsLoading';


export default combineReducers({
  movies,
  moviesHasErrored,
  moviesIsLoading
});
