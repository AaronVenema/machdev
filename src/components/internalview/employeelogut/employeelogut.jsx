import React from "react"
import LogoutGrid from "./logoutGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function EmployeeLogin() {
  return (
    <Container>
      <IHeader />
      <LogoutGrid />
      <IFooter />
    </Container>
     
  )
}

export default EmployeeLogin