import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutEmptyFavorites, showFavorites } from '../../Actions';
import { push } from 'react-router-dom';

export class Header extends Component{
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.location.pathname === '/signin' && nextProps.signedIn === true) {
      this.props.history.push('/');
    }
  }

  render() {
    const signedIn = this.props.signedIn;
    const signInContent = signedIn
      ? (<div className="sign-out"><span>Welcome, {this.props.userName}</span> <Link className="sign-in-link" onClick={() => this.props.signOut()} to="/">Sign Out</Link></div>)
      : <Link className="sign-in-link" to="/signin">Sign In/Sign Up</Link>;

    return (
      <div className="Header">
        <h1>Movie Tracker</h1>
        <h2><Link to='/favorites'
          onClick={() => {
            this.props.showFavorites(true)
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
  shouldShowFavorites: state.shouldShowFavorites,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutEmptyFavorites()),
  showFavorites: (bool) => dispatch(showFavorites(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
