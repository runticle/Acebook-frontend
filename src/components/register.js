import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div id="login">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <button id="submit_register">Register</button>
      </div>
    )
  }
}

export default Register;
