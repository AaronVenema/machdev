import React, { useState, useEffect } from "react"
import CurrentProjectsGrid from "./currentProjectsGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter" 

function CurrentProjects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/project")
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);
  return (
    <Container>
      <IHeader />
          {data && data.map((single) =>{
            if(!single.completed){
              return <CurrentProjectsGrid single={single} key={single.name} />
            }
          }
          )}

      <IFooter />
    </Container>
     
  )
}

export default CurrentProjects