import React from "react"
import HpGrid from "./hpGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function Homepage() {
  return (
    <Container>
      <Header />
      <HpGrid />
      <Footer />
    </Container>
     
  )
}

export default Homepage