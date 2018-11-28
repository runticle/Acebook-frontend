import React from 'react';
import Register from './register';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      log_email: "",
      log_password: ""
    };
  }

  logReq() {
    fetch("http://localhost:3000/users/sign_in", {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        user: {
          email: this.state.log_email,
          password: this.state.log_password
        }
      })
    })
      .then(res => {
        console.log(res.data)
        return res.json()
      })
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  validateForm() {
    return this.state.log_email.length > 0 && this.state.log_password.length > 0;
  }

  handleChange = event => {
     this.setState({
       [event.target.id]: event.target.value
     });
  }

  handleSubmit = event => {
    event.preventDefault();
    // the api url may need changing!!!!
    this.logReq();
  }

  render () {
    const style = this.props.loginHidden ? {display: 'none'} : {};
    return (
      <div className="form_container" id="login_form" style={style}>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="email" id="log_email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" id="log_password" placeholder="Password" onChange={this.handleChange}/>
          <button id="submit_login" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>

    )
  }

}

export default Login;
