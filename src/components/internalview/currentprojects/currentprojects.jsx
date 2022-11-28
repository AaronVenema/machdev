import React from "react"
import CurrentProjectsGrid from "./CurrentProjectsGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function CurrentProjects() {
  return (
    <Container>
      <IHeader />
      <CurrentProjectsGrid/>
      <IFooter />
    </Container>
     
  )
}

export default CurrentProjects