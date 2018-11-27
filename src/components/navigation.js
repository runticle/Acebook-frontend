import React from 'react';


class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark" id="navbar">
        <h2>Acebook</h2>
        <a href='/'>Timeline</a>
        <a href='/'>Logout</a>
      </nav>
    )
  }
}

export default Navigation;
