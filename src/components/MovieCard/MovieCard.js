import React from 'react';
import './MovieCard.css'
import { connect } from 'react-redux';
import { toggleFavorites, addFavorite, removeFavorite } from '../../Actions';

const MovieCard = (props) => {
  const handleFavorite = (movie) => {
    if (movie.isFavorite === false) {
      props.addFavorite(movie, props.user.id);
    } else {
      props.removeFavorite(props.user.id, movie.movie_id);
    }
    props.toggleFavorites(movie);
  };

  const checkFavorites = (movie) => {
    if (!props.user.name) {
      alert('You must sign-in to add a favorite');
    } else {
      handleFavorite(movie)
    }
  }



  return (
    <div className="outer-card-container">
      <div className="inner-card-container">
        <article class="card-front face">
          <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="movie poster" />
          {/* <div className="bottom-container">
            <button onClick={(event) => {
              event.preventDefault();
              checkFavorites(props.movie)
            }} />
            <h1>{props.title}</h1>
            <button>More Info<i className="icon-exchange"></i></button>
          </div> */}
        </article>
        <article class="card-back face">
          <h1>{props.title}</h1>   
          <p className="rating">{props.rating}</p>     
          <p>{props.overview}</p>
          <button onClick={(event) => {
            props.checkFavorites(props.movie)
          }}>FAVORITE<i className="icon-star"></i></button>
        </article>
      </div>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorites: (movie) => dispatch(toggleFavorites(movie)),
    addFavorite: (movie, id) => dispatch(addFavorite(movie, id)),
    removeFavorite: (userId, movieId) => dispatch(removeFavorite(userId, movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
