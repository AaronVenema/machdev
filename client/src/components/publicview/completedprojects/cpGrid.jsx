import React from 'react'
import {  Grid, Image, Segment } from 'semantic-ui-react'

const CpGrid = ({ single }) => {
  return (
    <Grid columns={3} divided className='justify-content-evenly'>
    <Grid.Column className="mt-4 justify-content-evenly">
    <Image src={`images/${single.image}`} />
    </Grid.Column>
    <Grid.Column className="mt-4 justify-content-evenly">
      <Segment className='d-flex m-4  text-wrap text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: "1vw" }} > {single.name} </Segment>
    </Grid.Column>
    <Grid.Column className="mt-4 justify-content-evenly">
      <Segment className='d-flex m-4  text-wrap text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: "1vw" }}> {single.description} </Segment>
    </Grid.Column>
    </Grid>
  )
}

export default CpGrid