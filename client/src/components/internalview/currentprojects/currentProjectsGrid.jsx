import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const CurrentProjectsGrid = ({ single }) => {
  console.log(single._id);
  return (
    <Grid columns={3} divided className='justify-content-evenly'>
    <Grid.Column className="mt-4 justify-content-evenly">
    
    <Link to="/pmBoard" state={{from: single}}>
      <Image src={`images/${single.image}`} />
    </Link>
    {/* <Image src={`images/${single.image}`} as={Link} to="/pmBoard" /> */}
    {/* <Image src={`images/${single.image}`} as={<Link to={{pathname:"/pmBoard",stuff:{...single}}}/>} /> */}
    {/* need to add link to /pmBoard/_id for specified project message board */}
    </Grid.Column>
    <Grid.Column className="mt-4 justify-content-evenly">
      <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }} > {single.name} </Segment>
    </Grid.Column>
    <Grid.Column className="mt-4 justify-content-evenly">
      <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }}> {single.description} </Segment>
    </Grid.Column>
    </Grid>
  )
}

export default CurrentProjectsGrid
