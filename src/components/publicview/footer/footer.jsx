import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Row, Container} from 'react-bootstrap';

function Footer (){
    return(
      <Container>
        <Row className="d-flex sticky-bottom bg-dark text-white text-center">
          <Navbar className="d-flex justify-content-center">
         <h3 className="text-center"> Developed By MachDev</h3>
         </Navbar>
        </Row>
        </Container>
    )
}
export default Footer