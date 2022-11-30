import React from 'react'
import { Grid, Image, Segment} from 'semantic-ui-react'

const DvGrid = ({ single }) => {
  return (
    <Grid.Column className="mt-4 justify-content-evenly">
      <Image src={`images/${single.icon}`} />
      <Segment className='d-flex m-4  text-wrap text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }} > {single.name} </Segment>
      <Segment className='d-flex m-4  text-wrap text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }}> {single.description} </Segment>
      {/* <Segment className='d-flex m-4  justify-content-center bg-secondary text-white'></Segment> */}
      {/* need to add variation of list of employees come back to this */}
    </Grid.Column>
  )
}

export default DvGrid