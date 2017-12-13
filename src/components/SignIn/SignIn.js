import React, { Component } from 'react'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      usernameInputVal: '',
      passwordInputVal: ''
    };
  }
  render() {
    return (
      <div className="SignIn">
        <form>
          <input type="text" value={this.state.usernameInputVal} placeholder="Username (email)" />
          <input type="text" value={this.state.passwordInputVal} placeholder="Password" />
          <input type="submit" placeholder="Sign In" value="u little bitch" />
        </form>
      </div>
    )
  }
}


export default SignIn