import React from "react"
import {Container, Navbar, Nav} from 'react-bootstrap';
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Header (){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="text-center">
        <Navbar.Brand > Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >MachDev Projects</Nav.Link>
              <Nav.Link >MachDev Departments</Nav.Link>
              <Nav.Link >MachDev Service Request</Nav.Link>
              <Nav.Link >MachDev Employee Login</Nav.Link>
              <Nav.Link >Current Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header

// as={Link} to="/currentprojects" formating for links in pages needs to be added to <Nav.Link >MachDev Projects</Nav.Link> as <Nav.Link as={Link} to="/currentprojects">MachDev Projects</Nav.Link>