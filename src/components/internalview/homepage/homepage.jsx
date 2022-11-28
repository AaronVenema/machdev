import React from "react"
import IHpGrid from "./hpGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function IHomepage() {
  return (
    <Container>
      <Header />
      <IHpGrid />
      <Footer />
    </Container>
     
  )
}

export default IHomepage