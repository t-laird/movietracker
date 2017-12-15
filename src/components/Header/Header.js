import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../Actions';

class Header extends Component{
  constructor() {
    super();
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
        <div className="sign-in">
          {signInContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.SignIn.signedIn,
  userName: state.SignIn.userData.name
});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(signOut());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
