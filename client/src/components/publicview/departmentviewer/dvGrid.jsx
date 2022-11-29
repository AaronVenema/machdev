import React from 'react'
import { Grid, Image, Segment} from 'semantic-ui-react'

const DvGrid = ({ single }) => {
  return (
    <Grid.Column className="mt-4 justify-content-center">
      <Image src={`images/${single.icon}`} />
      <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{ fontSize: "2vw" }} > {single.name} </Segment>
      <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white' style={{ fontSize: "2vw" }}> {single.description} </Segment>
      {/* <Segment className='d-flex m-4 p-4 justify-content-center bg-secondary text-white'></Segment> */}
      {/* need to add variation of list of employees come back to this */}
    </Grid.Column>
  )
}

export default DvGrid