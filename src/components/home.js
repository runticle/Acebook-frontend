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

  logoutReq() {
    fetch("https://acebook-stars.herokuapp.com/users/sign_out", {
      method: 'delete',
      // user_id: // USER ID FROM TOKEN!!!!! WOOO!
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          this.setState({
            error
          });
        }
      )
  }


    handleRegister = event => {
      event.preventDefault();
      document.getElementById('register_link').style.display = 'none'
      this.setState({loginHidden:true})
      this.setState({registerHidden:false})
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
        </div>
        </div>
      </div>
    )
  }

}

export default Home;
