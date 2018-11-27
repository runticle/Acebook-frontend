import React from 'react';
import Login from './login';
import Register from './register';


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged_in: false,
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark" id="navbar">
          <h2>Acebook</h2>
          <a href='/'>Timeline</a>
          <a href='/'>Logout</a>
        </nav>
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
