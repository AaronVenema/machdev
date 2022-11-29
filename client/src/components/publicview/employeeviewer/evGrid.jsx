import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const EvGrid = ({single}) => {
  return ( 
        <Grid.Column className= "mt-4 justify-content-evenly">
          <Image  src={`/images/${single.pic}`} />
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap' style={{ fontSize: "1vw" }} > {single.title} </Segment>
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap'style={{ fontSize: "1vw" }} > {single.firstName}  {single.lastName}</Segment>
          <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white text-wrap'style={{ fontSize: "1vw" }} > {single.email} </Segment>
        </Grid.Column>
  );
}

export default EvGrid