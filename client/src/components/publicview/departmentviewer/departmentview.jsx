import React, { useState, useEffect } from "react"
import DvGrid from "./dvGrid"
import { Container, Grid } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function DepartmentView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/department")
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
            <DvGrid single={single} key={single.name} />
          )}
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>
     
  )
}

export default DepartmentView