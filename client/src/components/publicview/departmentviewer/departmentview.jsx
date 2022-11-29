import React, { useState, useEffect } from "react"
import DvGrid from "./dvGrid"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"
function DepartmentView() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api/department")
    .then(response=> response.json())
    .then(datas => setData(datas.payload));
  },[]);
  return (
    <Container>
      <Header />
      {data && data.map((single)=>
          <DvGrid single={single} key={single._id} />
        )}
      {/* <DvGrid /> */}
      <Footer />
    </Container>
     
  )
}

export default DepartmentView