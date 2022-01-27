import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Appbar.css"

const Appbar = () => {
  const {user,handleLogout} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  className='appbar' variant="light" sticky='top'>
  <Container>
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    <Nav>
      <Nav.Link ><NavLink to="/" className="linkis">Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink to="/addExperience" className="linkis">AddExperience</NavLink></Nav.Link>
      <Nav.Link ><NavLink to="/dashboard" className="linkis">Dashboard</NavLink></Nav.Link>
      {
        user.email ? <Button variant="outline-dark" onClick={handleLogout}>LogOut</Button> : <Nav.Link ><NavLink to="/login" className="linkis">Login</NavLink></Nav.Link>
      }
      {/* <Nav.Link ><NavLink to="/login" className="linkis">Login</NavLink></Nav.Link> */}
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Appbar;