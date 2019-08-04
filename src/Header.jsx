import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div className="nav-bar-wrapper">
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#00c4ff'}}>
      <Navbar.Brand exact to="/">Textiply</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/Component1" className="nav-link-anchor">
                        Component1
          </NavLink>
          <NavLink exact to="/Component2" className="nav-link-anchor">
          Component2
          </NavLink>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
    )

export default Header;