import React from 'react';
import './MovieCard.css'
import { connect } from 'react-redux';
import { toggleFavorites } from '../../Actions';

const MovieCard = (props) => {

  <div id="f1_container">
    <div id="f1_card" class="shadow">
      <article class="front face">
        <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" width="290" height="430" />
      </article>
      <article class="back face center">
        <h1>{props.title}</h1>   
        <p>{props.rating}</p>     
        <p>{props.overview}</p>
        <button onClick={(event) => {
          props.toggleFavorites(props.movie)
        }}>FAVORITE</button>
      </article>
    </div>
  </div>

  return (
    <article>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" width="290" height="430" />
      <button onClick={(event) => {
        props.toggleFavorites(props.movie)
      }}>FAVORITE</button>
      <h1>{props.title}</h1>
    </article>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorites: (movie) => dispatch(toggleFavorites(movie)),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
