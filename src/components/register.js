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

  regReq() {
    // fetch("https://acebook-stars.herokuapp.com/users", {
    fetch("http://localhost:3000/users", {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.reg_email,
          password: this.state.reg_password,
          password_confirmation: this.state.confirm_password
        })


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
    return this.state.reg_email.length > 0 && this.state.reg_password.length > 0 && this.state.name.length > 0 && this.state.confirm_password.length > 0;
  }

  checkPassword() {
    return this.state.reg_password === this.state.confirm_password;
  }

  handleChange = event => {
     this.setState({
       [event.target.id]: event.target.value
     });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.checkPassword()) {
      alert("Passwords don't match u idiot")
    }
    this.regReq();
  }

  render () {
    const style = this.props.registerHidden ? {display: 'none'} : {};
    return (
      <div className="form_container" id="registration_form" style={style}>
        <form className="form" onSubmit={this.handleSubmit}>
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
