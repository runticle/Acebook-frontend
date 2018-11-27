import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      log_email: "",
      log_password: ""
    };
  }

  validateForm() {
    return this.state.log_email.length > 0 && this.state.log_password.length > 0;
  }

  handleChange = event => {
    console.log(event.target.id)
    console.log(event.target.value)
     this.setState({
       [event.target.id]: event.target.value
     });
  }

  handleSubmit = event => {
    event.preventDefault();
    //fetch call to rails api??
    //check details n shit ?
  }

  render () {

    return (
      <div class="form_container">
        <form class="form" onSubmit={this.handleSubmit}>
          <input type="email" id="log_email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" id="log_password" placeholder="Password" onChange={this.handleChange}/>
          <button id="submit_login" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }

}

export default Login;
