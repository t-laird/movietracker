/* eslint-disable id-blacklist*/

import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutEmptyFavorites, updateFavorites, signInSuccess } from '../../Actions';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';


export class Header extends Component{

  componentWillUpdate(nextProps) {
    if (
      nextProps.location.pathname === '/signin' && 
      nextProps.signedIn === true
    ) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    const attemptLocalStorage = localStorage.getItem('xyz123MTracker');
    if (attemptLocalStorage) {
      const userInfo = JSON.parse(attemptLocalStorage);
      this.props.signInSuccess({data: userInfo});
      this.props.retrieveFavorites(userInfo.id);
    }
  }

  render() {
    const signedIn = this.props.signedIn;
    const signInContent = signedIn
      ? (<div className="sign-out">
        <span>Welcome, {this.props.userName}</span>
        <Link className="sign-in-link" onClick={
          () => this.props.signOut()
        } to="/">Sign Out</Link>
      </div>)
      : <Link className="sign-in-link" to="/signin">Sign In/Sign Up</Link>;

    return (
      <div className="Header">
        <h1><Link to='/'>Movie Tracker</Link></h1>
        <h2><Link to='/favorites'
          onClick={() => {
            this.props.changeRoute('/favorites');
          }}>FAVORITES: {this.props.favorites.length}</Link></h2>
        <div className="sign-in">
          {signInContent}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  signedIn: state.SignIn.signedIn,
  userName: state.SignIn.userData.name,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutEmptyFavorites()),
  changeRoute: (url) => dispatch(push(url)),
  signInSuccess: (userObj) => dispatch(signInSuccess(userObj)),
  retrieveFavorites: (userId) => dispatch(updateFavorites(userId))
});

Header.propTypes = {
  history: PropTypes.object,
  signedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  favorites: PropTypes.number,
  signOut: PropTypes.func.isRequired,
  changeRoute: PropTypes.func,
  signInSuccess: PropTypes.func,
  retrieveFavorites: PropTypes.func

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
