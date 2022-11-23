import React from "react"
import EvGrid from "./evGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function EmployeeView() {
  return (
    <Container>
      <Header />
      <EvGrid />
      <Footer />
    </Container>
     
  )
}

export default EmployeeView