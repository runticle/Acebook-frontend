import React from 'react';
import Login from './login';
import Register from './register';
import Welcome from './welcome';


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loginHidden: false,
      registerHidden: true
    };
  }

  handleRegister = event => {
    event.preventDefault();
    document.getElementById('register_link').style.display = 'none'
    this.setState({loginHidden:true})
    this.setState({registerHidden:false})
  }

  toggleButtons = event => {
    if (this.state.loggedIn) {
      return (
        <>
         <a href='/'>Logout</a>
        </>
      )
    } else {
      return (
        <>
        <a href='/'>Login</a>
        </>
      )
    }
  }

  render() {
    document.body.style = "background-color: #e6e9ef;"

    return (
      <div>
        <nav className="navbar navbar-dark" id="navbar">
          <h2>Acebook</h2>
          <a href='/posts'>Timeline</a>
          { this.toggleButtons()}
        </nav>
        < Welcome />
        <div id="Authentication">
        <div id="login_box" className="form">
          <Login
            loginHidden={this.state.loginHidden}
          />
          <p id="register_link" className="form"> New user? <a href='/' onClick={this.handleRegister.bind(this)}>Register</a></p>
        </div>
        <div id="register_box" className="form">
          <Register
            registerHidden={this.state.registerHidden}
          />
        </div>
        </div>
      </div>
    )
  }

}

export default Navigation;
