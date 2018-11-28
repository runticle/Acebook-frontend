import React from 'react';


class Navigation extends React.Component {


  // SORT THIS OUT

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
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

  handleLogout = event => {
    event.preventDefault();
    this.state.loggedIn = false;
    this.logoutReq();
  }

  toggleButtons = event => {
    if (this.state.loggedIn) {
      return (
        <>
         <a onClick={this.handleLogout} href='/'>Logout</a>
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
      </div>
    )
  }

}

export default Navigation;
