import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorites } from '../../Actions';

const MovieCard = (props) => {

  return (
    <div>
      <button onClick={(event) => {
        event.preventDefault();
        props.toggleFavorites(props.movie)
      }}>FAVORITE</button>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" />
      <h1>{props.title}</h1>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorites: (movie) => dispatch(toggleFavorites(movie)),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
