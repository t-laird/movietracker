import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className="Header">
      <h1>Movie Tracker</h1>
      <Link className="sign-in" to="/signin">Sign In/Sign Up</Link>
    </div>
  );
}

export default Header;