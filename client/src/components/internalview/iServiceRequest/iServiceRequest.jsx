import React, { useState, useEffect } from "react"
import ISRGrid from "./iSRGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
function ISRequest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/serviceRequest")
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);
  return (
    <Container>
      <IHeader />
          {console.log(data)}
          {data && data.map((single) =>
            <ISRGrid single={single} key={single.name} />
          )}
      <IFooter />
    </Container>
     
  )
}

export default ISRequest