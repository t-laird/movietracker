import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import { fetchMovieList } from '../../Actions';
import './MovieContainer.css';
import PropTypes from 'prop-types';

const key = require('../../Utils/key')

class MovieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`);
  }

  renderMovies() {
    const location = this.props.location.pathname;
    const movieArray = location === '/favorites' ? this.props.favorites : this.props.movies.movies;
    const movieCardsArray = movieArray.map((movie) => {
      return (<MovieCard key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        rating={movie.vote_average}
        movie={movie} />)
    })

    return movieCardsArray
  }

  render() {
    const location = this.props.location.pathname;
    const movieArray = location === '/favorites' ? this.props.favorites : this.props.movies.movies;
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
        {this.renderMovies()}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => dispatch(fetchMovieList(url)),
  };
  
};

MovieContainer.propTypes = {
    movies: PropTypes.arrayOf({}).isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    favorites: PropTypes.arrayOf({}).isRequired,
    fetchMovieList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
