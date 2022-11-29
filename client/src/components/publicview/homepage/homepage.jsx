import React from "react"
import HpGrid from "./hpGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
import Statistics from "./statistics"

function Homepage() {
  return (
    <Container>
      <Header />
      <HpGrid />
      <Statistics />
      <Footer />
    </Container>
     
  )
}

export default Homepage