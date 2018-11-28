import React from 'react';
import Login from './login';
import Register from './register';
import Welcome from './welcome';
import Navigation from './navigation';
import {Redirect} from 'react-router'


class Home extends React.Component {

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
    document.getElementById('signup_link').style.display = 'block'
    this.setState({loginHidden:true})
    this.setState({registerHidden:false})
  }

  handleLogIn = event => {
    event.preventDefault();
    document.getElementById('signup_link').style.display = 'none'
    document.getElementById('register_link').style.display = 'block'
    this.setState({loginHidden:false})
    this.setState({registerHidden:true})
  }

  render() {
    document.body.style = "background-color: #e6e9ef;"

    return (
      <div>
        <Navigation />
        < Welcome />
        <div id="Authentication">
        <div id="login_box" className="form">
          <Login
            loginHidden={this.state.loginHidden}
          />
          <p id="register_link" className="form"> New user? <a href='/' onClick={this.handleRegister}>Register</a></p>
        </div>
        <div id="register_box" className="form">
          <Register
            registerHidden={this.state.registerHidden}
          />
          <p id="signup_link" className="form"> Already signed up? <a href='/' onClick={this.handleLogIn}>Log In</a></p>
        </div>
        </div>
      </div>
    )
  }

}

export default Home;
