import React from "react"
import LogoutGrid from "./logoutGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function EmployeeLogin() {
  return (
    <Container>
      <Header />
      <LogoutGrid />
      <Footer />
    </Container>
     
  )
}

export default EmployeeLogin