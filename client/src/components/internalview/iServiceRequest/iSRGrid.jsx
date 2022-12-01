import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const ISRGrid = ({single}) => {
  return ( 
        <Grid.Column className= "mt-4 justify-content-evenly">
          <Image  src={`/images/nullP.webp`} />
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap'style={{ fontSize: "1vw" }} > {single.email} </Segment>
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap'style={{ fontSize: "1vw" }} > {single.firstname}  {single.lastname}</Segment>
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap' style={{ fontSize: "1vw" }} > {single.request} </Segment>
        </Grid.Column>
  );
}

export default ISRGrid