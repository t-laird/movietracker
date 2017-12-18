import React, { Component } from 'react';
import './SignIn.css';
import { connect } from 'react-redux';
import { signInAttempt, signUpAttempt } from '../../Actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      nameInputVal: '',
      usernameInputVal: '',
      passwordInputVal: '',
      nameClass: 'signin-input',
      usernameClass: 'signin-input',
      passwordClass: 'signin-input',
      passwordDisplay: 'password',
      signup: false,
      emailError: null
    };
  }

  inputFocus(type, focusType) {
    this.setState({
      [`${type}Class`]: focusType
    });
  }

  handleChange(event, type) {
    this.setState({
      [type]: event.target.value
    });
  }

  handleShowPass(event) {
    if (event.target.checked) {
      this.setState({
        passwordDisplay: 'text'
      });
    } else {
      this.setState({
        passwordDisplay: 'password'
      });
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { nameInputVal, usernameInputVal, passwordInputVal } = this.state;
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g');
    if (this.state.signup) {
      if (
        nameInputVal.length > 2
        && usernameInputVal.length > 2
        && passwordInputVal.length > 2
      ) {
        if (!emailRegex.test(usernameInputVal)) {
          this.setState({
            emailError: 'please enter a valid email'
          });
        } else {
          this.props.signUpForApp(
            nameInputVal,
            usernameInputVal,
            passwordInputVal
          );
        }
      } 

    } else {
      this.props.signInToApp(
        usernameInputVal,
        passwordInputVal
      );
    }
  }

  changeSignInType = () => {
    const signup = this.state.signup ? false : true;
    this.setState({ signup });
  }


  render() {
    const signup = this.state.signup;
    const signupInput = signup ?
      <input
        type="text"
        className={this.state.nameClass}
        value={this.state.nameInputVal}
        onFocus={() => this.inputFocus('name', 'signin-input focused')}
        onBlur={() => this.inputFocus('name', 'signin-input')}
        onChange={(event) => this.handleChange(event, 'nameInputVal')}
        placeholder="Name" /> : null;

    const submitText = signup ? "Sign Up!" : "Sign In!";
    const signinToggle = signup ? "Sign In Instead" : "Sign Up Instead";
    const buttonClass = signup ? "up" : "in";

    const signinError = this.props.userObject.error;
    const emailError = this.state.emailError ? <span className="error">{this.state.emailError}</span> : null;
    const errorStatement = !signinError
      ? null
      : <span className="error">{signinError}</span>;

    return (
      <div className="SignIn">
        <form className={buttonClass} onSubmit={this.submitHandler}>
          <Link to="/" className="sign-in-close">Close</Link>
          {errorStatement}
          {signupInput}
          {emailError}
          <input
            type="text"
            className={this.state.usernameClass}
            value={this.state.usernameInputVal}
            onFocus={() => this.inputFocus('username', 'signin-input focused')}
            onBlur={() => this.inputFocus('username', 'signin-input')}
            onChange={(event) => this.handleChange(event, 'usernameInputVal')}
            placeholder="Username (email)" />
          <input
            type={this.state.passwordDisplay}
            className={this.state.passwordClass}
            value={this.state.passwordInputVal}
            onFocus={() => this.inputFocus('password', 'signin-input focused')}
            onBlur={() => this.inputFocus('password', 'signin-input')}
            onChange={(event) => this.handleChange(event, 'passwordInputVal')}
            placeholder="Password (case sensitive)" />
          <div className="password-show-hide">
            <div className={`type-toggle ${buttonClass}`}>
              <button
                tabIndex="-1"
                onClick={this.changeSignInType}
                className={buttonClass}>{signinToggle}</button>
            </div>
            <label htmlFor="password-option">Show Password?</label>
            <input
              id="password-option"
              onChange={(event)=> this.handleShowPass(event)}
              tabIndex="-1"
              type="checkbox"
              name="passOption"
              value="text" />
          </div>
          <input type="submit" value={submitText} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  userObject: store.SignIn
});

const mapDispatchToProps = dispatch => ({
  signInToApp: (username, password) => {
    dispatch(signInAttempt(username, password));
  },
  signUpForApp: (name, username, password) => {
    dispatch(signUpAttempt(name, username, password));
  }
});

SignIn.propTypes = {
  userObject: PropTypes.object.isRequired,
  signInToApp: PropTypes.func.isRequired,
  signUpForApp: PropTypes.func.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
