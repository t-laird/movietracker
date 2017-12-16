import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import { fetchMovieList, showFavorites, shouldShowFavorites } from '../../Actions';
import './MovieContainer.css';
const key = require('../../Utils/key');

class MovieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
  }

  render() {
    const location = this.props.location.pathname
    console.log(this.props);
    const movieArray = location === '/favorites' ? this.props.favorites : this.props.movies
    const movieCardsArray = movieArray.map( (movie) => {
      return (<MovieCard key={movie.id}
                         poster={movie.poster_path}
                         title={movie.title}
                         overview={movie.overview}
                         rating={movie.vote_average}
                         movie={movie}/>)
    })
    return (
      <section>
        {movieCardsArray}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    favorites: state.favorites,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading,
    user: state.user,
    shouldShowFavorites: state.shouldShowFavorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => dispatch(fetchMovieList(url)),
    showFavorites: (bool) => dispatch(showFavorites(bool))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
