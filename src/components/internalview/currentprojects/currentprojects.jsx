import React from "react"
import CurrentProjectsGrid from "./CurrentProjectsGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function CurrentProjects() {
  return (
    <Container>
      <Header />
      <CurrentProjectsGrid/>
      <Footer />
    </Container>
     
  )
}

export default CurrentProjects