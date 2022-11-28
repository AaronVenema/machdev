import React, { useState, useEffect } from "react"
import EvGrid from "./evGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function EmployeeView() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api/department")
    .then(response=> response.json())
    .then(datas => setData(datas.payload));
  },[]);
  
  return (
    <Container>
      <Header />
        {console.log(data)}
        {data && data.map((single)=>
          <EvGrid single={single} key={single.name} />
        )}
      <Footer />
    </Container>
     
  )
}

export default EmployeeView