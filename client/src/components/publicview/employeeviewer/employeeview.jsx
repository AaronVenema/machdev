import React, { useState, useEffect } from "react"
import EvGrid from "./evGrid"
import { Container, Grid } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"

const empDef = {
  "Lead": "lead-logo.png",
  "HeadArchitect": "head-architect-logo.png",
  "CFO": "cfo-logo.png",
  "CIO": "cio-logo.png",
  "SEO": "seo-logo.png",
  "ALP": "alp-logo.png",
  "VikingsFanBoy": "gary-stumped.png",
  "NodemonGlobally": "katys-afternoon.png",
}



function EmployeeView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/employee")
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);
  // console.log(empDef['Head Architect']);
  return (
    <Container>
      <Header />
      <Grid columns={3} divided>
        <Grid.Row>
          {console.log(data)}
          {data && data.map((single) =>
          <EvGrid single={{...single,pic: empDef[single.title.replace(/\s+/g,"")]}} key={single._id} />
          )}
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>

  )
}

export default EmployeeView