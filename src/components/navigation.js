import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';


class Navigation extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
       <Navbar.Header>
         <Navbar.Brand>
           <a href="#home">Acebook</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
          <NavItem eventKey={1} href="#">
            Your Timeline
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={1} href="#">
            Logout
          </NavItem>
       </Nav>
      </Navbar>
    )
  }
}

export default Navigation;
