import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const EvGrid = ({single}) => {
  return (
        <Grid.Column className= "mt-4 justify-content-center">
          <Image  src="/images/cfo-logo.png" />
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white'  style={{fontSize: "2vw"}} > {single.title} </Segment>
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{fontSize: "2vw"}}> {single.firstName}  {single.lastName}</Segment>
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{fontSize: "1vw"}}> {single.email} </Segment>
        </Grid.Column>
  );
}

export default EvGrid