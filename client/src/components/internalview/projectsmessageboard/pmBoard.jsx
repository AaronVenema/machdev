import React from "react"
import PmThreadGrid from "./pmThreadGrid"
import PmReplyGrid from "./pmReplyGrid"
import PmTitleGrid from "./pmTitleGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function PmBoard() {
  return (
    <Container>
      <IHeader />
      <PmTitleGrid />
      <PmThreadGrid />
      <PmReplyGrid />
      <IFooter />
    </Container>
     
  )
}

export default PmBoard