import React, { Component } from 'react'
import './SignIn.css';
import { connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import { signInAttempt } from '../../Actions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      usernameInputVal: '',
      passwordInputVal: '',
      usernameClass: 'signin-input',
      passwordClass: 'signin-input',
      passwordDisplay: 'password'
    };
  }

  inputFocus(type, focusType) {
    this.setState({
      [`${type}Class`]: focusType
    });
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  handleShowPass(e) {
    if (e.target.checked) {
      this.setState({
        passwordDisplay: 'text'
      });
    } else {
      this.setState({
        passwordDisplay: 'password'
      });
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.signInToApp(this.state.usernameInputVal, this.state.passwordInputVal);
  }


  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.submitHandler}>
          <input 
            type="text" 
            className={this.state.usernameClass}
            value={this.state.usernameInputVal} 
            onFocus={() => this.inputFocus('username', 'signin-input focused')}
            onBlur={() => this.inputFocus('username', 'signin-input')}
            onChange={(e) => this.handleChange(e, 'usernameInputVal')}
            placeholder="Username (email)" />
          <input 
            type={this.state.passwordDisplay}
            className={this.state.passwordClass}
            value={this.state.passwordInputVal} 
            onFocus={() => this.inputFocus('password', 'signin-input focused')}
            onBlur={() => this.inputFocus('password', 'signin-input')}
            onChange={(e) => this.handleChange(e, 'passwordInputVal')}            
            placeholder="Password (case sensitive)" />
          <span className="password-show-hide">
            <label htmlFor="password-option">Show Password?</label>
              <input 
                id="password-option" 
                onChange={(e)=> this.handleShowPass(e)} 
                tabIndex="-1"
                type="checkbox" 
                name="passOption" 
                value="text" /></span>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInToApp: (username, password) => {
    dispatch(signInAttempt(username, password));
  }
});




export default connect(null, mapDispatchToProps)(SignIn);