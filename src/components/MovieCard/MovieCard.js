import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => {
  return (
    <article>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" width="290" height="430" />
      <h1>{props.title}</h1>
    </article>
  )
}

export default MovieCard;
