import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div className="nav-bar-wrapper">
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#007AFF'}}>
      <NavLink exact to="/">
        <Navbar.Brand>Textiply</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="nav-bar-links">
            <NavLink exact to="/campaign" className="nav-link-anchor">
            Campaigns
            </NavLink>
            <NavLink exact to="/messages" className="nav-link-anchor">
            Messages
            </NavLink>
            <NavLink exact to="/audience" className="nav-link-anchor">
            Audience
            </NavLink>
          </div>
          {/* <div>
            <button>Free Trial</button>
          </div> */}
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