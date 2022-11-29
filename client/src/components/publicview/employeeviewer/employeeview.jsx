import React, { useState, useEffect } from "react"
import EvGrid from "./evGrid"
import { Container, Grid } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"

const empDef = {
  "Lead": "lead-logo.png",
  "Head Architect": "head-architect-logo.pnmg",
  "CFO": "cfo-logo.png",
  "CIO": "cio",
  "SEO": "seo-logo.png",
  "ALP": "alp-logo.png"

}



function EmployeeView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/employee")
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);

  return (
    <Container>
      <Header />
      <Grid columns={3} divided>
        <Grid.Row>
          {console.log(data)}
          {data && data.map((single) =>
            <EvGrid single={{...single,pic: empDef[single.title]}} key={single.name} />
          )}
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>

  )
}

export default EmployeeView