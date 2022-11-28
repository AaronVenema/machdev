import React from "react"
import PmGrid from "./pmGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function IHomepage() {
  return (
    <Container>
      <Header />
      <PmGrid />
      <Footer />
    </Container>
     
  )
}

export default IHomepage