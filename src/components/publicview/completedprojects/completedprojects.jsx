import React from "react"
import CpGrid from "./cpGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function CompletedProjects() {
  return (
    <Container>
      <Header />
      <CpGrid />
      <Footer />
    </Container>
     
  )
}

export default CompletedProjects