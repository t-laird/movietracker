import React from 'react';
import './MovieCard.css'
import { connect } from 'react-redux';
import { toggleFavorites } from '../../Actions';

const MovieCard = (props) => {


  return (
    <div className="outer-card-container">
      <div className="inner-card-container">
        <article class="card-front face">
          <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" width="290" height="430" />
        </article>
        <article class="card-back face">
          <h1>{props.title}</h1>   
          <p className="rating">{props.rating}</p>     
          <p>{props.overview}</p>
          <button onClick={(event) => {
            props.toggleFavorites(props.movie)
          }}>FAVORITE</button>
        </article>
      </div>
    </div> 
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorites: (movie) => dispatch(toggleFavorites(movie)),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
