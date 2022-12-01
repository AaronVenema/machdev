import {React, useEffect, useState} from "react"
import PmThreadGrid from "./pmThreadGrid"
import PmReplyGrid from "./pmReplyGrid"
import PmTitleGrid from "./pmTitleGrid"
import { Container } from "semantic-ui-react"
import IHeader from "../header/iheader"
import IFooter from "../footer/ifooter"
import { useLocation } from "react-router-dom"


const PmBoard = () => {
  const location = useLocation();
  const {from} = location.state;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/project/${from._id}`)
      .then(response => response.json())
      .then(datas => setData(datas.payload));
  }, []);

  return (
    <Container>
      <IHeader />
      {data && 
        <>
            <PmTitleGrid title={data.getByIdQuery.name}/>
            {data.messages && data.messages.map((message)=>{
              return (
              <PmThreadGrid message={message} key={message._id}/>
              )
            })
            }
        </>
      }
      <PmReplyGrid />
      {/* need to add post for reply for specified project message board */}
      <IFooter />
    </Container>
     
  )
}

export default PmBoard