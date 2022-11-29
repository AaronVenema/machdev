import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const EvGrid = ({single}) => {
  return (
<<<<<<< HEAD
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src={`images/${single.pic}`} />
          <Segment>{single.firstName}</Segment>
=======
        <Grid.Column className= "mt-4 justify-content-center">
          <Image  src="/images/cfo-logo.png" />
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white'  style={{fontSize: "2vw"}} > {single.title} </Segment>
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{fontSize: "2vw"}}> {single.firstName}  {single.lastName}</Segment>
          <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{fontSize: "1vw"}}> {single.email} </Segment>
>>>>>>> 0b0381d4b807bb30cbabbb83716b1e613c02ff08
        </Grid.Column>
  );
}

export default EvGrid