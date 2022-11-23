import React from "react"
import SrGrid from "./srGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function ServiceRequest() {
  return (
    <Container>
      <Header />
      <SrGrid />
      <Footer />
    </Container>
     
  )
}

export default ServiceRequest