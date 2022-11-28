import React from "react"
import PmGrid from "./pmGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function IHomepage() {
  return (
    <Container>
      <IHeader />
      <PmGrid />
      <IFooter />
    </Container>
     
  )
}

export default IHomepage