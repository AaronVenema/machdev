import React from "react"
import DvGrid from "./dvGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function DepartmentView() {
  return (
    <Container>
      <Header />
      <DvGrid />
      <Footer />
    </Container>
     
  )
}

export default DepartmentView