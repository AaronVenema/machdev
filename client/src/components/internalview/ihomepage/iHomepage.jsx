import React from "react"
import IHpGrid from "./ihpGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function IHomepage() {
  return (
    <Container>
      <IHeader />
      <IHpGrid />
      <IFooter />
    </Container>
     
  )
}

export default IHomepage