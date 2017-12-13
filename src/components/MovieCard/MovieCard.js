import React from 'react';

const MovieCard = (props) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" />
      <h1>{props.title}</h1>
    </div>
  )
}

export default MovieCard;
