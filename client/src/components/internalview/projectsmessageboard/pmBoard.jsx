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
      {/* need to add fetch for title for specified project message board */}
      <PmThreadGrid />
      {/* need to add fetch for thread for specified project message board */}
      <PmReplyGrid />
      {/* need to add post for reply for specified project message board */}
      <IFooter />
    </Container>
     
  )
}

export default PmBoard