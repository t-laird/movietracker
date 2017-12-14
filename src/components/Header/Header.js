import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    console.log(this.props);
    const signedIn = this.props.signedIn;
    const signInContent = signedIn
      ? (<div className="sign-out"><span>Welcome, {this.props.userName}</span> <Link className="sign-in-link" to="/">Sign Out</Link></div>)
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

export default connect(mapStateToProps, null)(Header);