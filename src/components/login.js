import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render () {

    return (
      <div id="login">
        <form onSubmit={this.handleSubmit}>
          <input type="email" id="email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" id="password" placeholder="Password" onChange={this.handleChange}/>
          <button id="submit_login">Submit</button>
        </form>
      </div>
    )
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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

}

export default Login;
