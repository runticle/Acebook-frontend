import React from 'react';

class Login extends React.Component {
  render () {
    return (
      <div id="login">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button id="submit_login">Submit</button>
      </div>
    )
  }
}

export default Login;
