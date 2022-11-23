import React from "react"
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Header (){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="text-center">
        <Navbar.Brand as={Link} to="/"> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/companyInfo">Info</Nav.Link>
            <Nav.Link as={Link} to="/completedProjects" >MachDev Works</Nav.Link>
            <Nav.Link as={Link} to="/departmentView">Departments</Nav.Link>
            <Nav.Link as={Link} to="/employeeView">Employees</Nav.Link>
            <Nav.Link as={Link} to="/serviceRequest">Service Request</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header

// as={Link} to="/currentprojects" formating for links in pages needs to be added to <Nav.Link >MachDev Projects</Nav.Link> as <Nav.Link as={Link} to="/currentprojects">MachDev Projects</Nav.Link>