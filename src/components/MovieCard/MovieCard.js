import React, { Component } from 'react';
import './MovieCard.css'
import { connect } from 'react-redux';
import { toggleFavorites, addFavorite, removeFavorite } from '../../Actions';

class MovieCard extends Component{
  constructor() {
    super();
    this.state = {
      cardFlipped: false
    };
  }


  handleFavorite = (movie) => {
    const currentFavorites = this.props.favorites;
    const isFavorite = currentFavorites.find( movieId => {
      return movieId.title=== movie.title;
    });
    if (!isFavorite) {
      this.props.addFavorite(movie, this.props.user.userData.id);
    } else {
      this.props.removeFavorite(movie.id, this.props.user.userData.id);
    }
    this.props.toggleFavorites(movie)
  };

  checkFavorites = (movie) => {
    if (!this.props.user.signedIn) {
      alert('You must sign-in to add a favorite');
    } else {
      this.handleFavorite(movie)
    }
  };

  flipCard = () => {
    const cardFlipped = this.state.cardFlipped ? false : true;
    this.setState({
      cardFlipped
    });
  };





render() {
  console.log('rerender');
  const flipClass = this.state.cardFlipped ? 'flip' : '';

    return (
      <div className={`outer-card-container ${flipClass}`}>
        <div className="inner-card-container">
          <article className="card-front face">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt="movie poster" />
            <div className="bottom-container">
              <button onClick={(event) => {
                event.preventDefault();
                this.checkFavorites(this.props.movie)
              }}>Favorite<i className="icon-star"></i></button>
              <h1>{this.props.title}</h1>
              <button onClick={() => {this.flipCard()}}>More Info<i className="icon-exchange"></i></button>
            </div>
          </article>
          <article className="card-back face">
            <div className="top-section">
              <div className="top-row">
                <h1>{this.props.title}</h1>
                <p className="rating">{this.props.rating}</p>
              </div>
              <p>{this.props.overview}</p>
            </div>
            <div className="bottom-container">
              <button onClick={(event) => {
                event.preventDefault();
                this.checkFavorites(this.props.movie)
              }}>Favorite<i className="icon-star"></i></button>
              <h1>{this.props.title}</h1>
              <button onClick={() => {this.flipCard()}}>More Info<i className="icon-exchange"></i></button>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.SignIn,
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
