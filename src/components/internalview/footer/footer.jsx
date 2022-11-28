import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Row, Container} from 'react-bootstrap';

function IFooter (){
    return(
      <Container>
        <Row className="d-flex sticky-bottom bg-dark text-green text-center">
          <Navbar className="d-flex justify-content-center">
         <h3 className="text-center">MachDev Employee View</h3>
         </Navbar>
        </Row>
        </Container>
    )
}
export default IFooter