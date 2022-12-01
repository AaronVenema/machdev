import React from "react"
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useAppContext } from "../../publicview/utils/AppContext";
import Cookie from "js-cookie";

function IHeader (){
  const { appState, setAppState } = useAppContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    const lookupCheck = await fetch("/api/employee/lookup", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const lookupResult = await lookupCheck.json();
    console.log(lookupResult);

    // If the login was good, save the returned token as a cookie
    if( lookupResult.result === "success" ){
      Cookie.remove("auth-token", lookupResult.token)
      setAppState({...appState, employee: lookupResult.employee})
    }
  }

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="text-center">
      <Navbar.Brand as={Link} to="/iHomepage"> Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/currentProjects" >Projects</Nav.Link>
          <Nav.Link as={Link} to="/iServiceRequest">Incoming Requests</Nav.Link>
          <Nav.Link  onClick={handleLogout}>Employee Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default IHeader

// as={Link} to="/currentprojects" formating for links in pages needs to be added to <Nav.Link >MachDev Projects</Nav.Link> as <Nav.Link as={Link} to="/currentprojects">MachDev Projects</Nav.Link>