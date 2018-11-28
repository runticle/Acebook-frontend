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
    fetch("https://acebook-stars.herokuapp.com/users/sign_in", {
      method: 'post',
      email: this.state.log_email,
      password: this.state.log_password
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
