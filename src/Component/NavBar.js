import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


const NavBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">EASY CODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Our Mission</Nav.Link>
            <NavDropdown title="Our Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skill 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skill 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skill 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Skill 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
}
export default NavBar
