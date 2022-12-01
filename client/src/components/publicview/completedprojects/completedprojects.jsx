import React, { useState, useEffect } from "react"
import CpGrid from "./cpGrid"
import { Container, Grid } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function CompletedProjects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/project")
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);
  return (
    <Container>
      <Header />
          {console.log(data)}
          {data && data.map((single) =>{
            if(single.completed){
              return <CpGrid single={single} key={single.name} />
            }
          }
          )}
      <Footer />
    </Container>
     
  )
}

export default CompletedProjects