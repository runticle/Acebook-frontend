import React from 'react';

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      reg_email: "",
      reg_password: "",
      confirm_password: ""
    };
  }

  validateForm() {
    return this.state.reg_email.length > 0 && this.state.reg_password.length > 0 && this.state.name.length > 0 && this.state.confirm_password.length > 0;
  }

  checkPassword() {
    return this.state.password === this.state.confirm_password;
  }

  handleChange = event => {
     this.setState({
       [event.target.id]: event.target.value
     });
  }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    if (!this.checkPassword()) {
      alert("Passwords don't match u idiot")
    }
    //fetch call to rails api??
    //check details n shit ?
  }

  render () {
    return (
      <div class="form_container">
        <form class="form" onSubmit={this.handleSubmit}>
          <input type="text" id="name" placeholder="Name" onChange={this.handleChange}/>
          <input type="email" id="reg_email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" id="reg_password" placeholder="Password" onChange={this.handleChange}/>
          <input type="password" id="confirm_password" placeholder="Confirm Password" onChange={this.handleChange}/>
          <button id="submit_register" disabled={!this.validateForm()}>Register</button>
        </form>
      </div>
    )
  }
}


export default Register;
