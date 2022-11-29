import React from 'react'
import { Grid, Image, Segment, Statistic} from 'semantic-ui-react'

const HpGrid = () => (
  <Grid className='justify-content-center'>
   
    
      <Grid.Column >
        <Segment as='h3'  className= 'bg-secondary justfiy-content-center text-white'textAlign='center' >Welcome to MACHDEV, where you can find solutions for all your tech needs. </Segment>
        <Image src="/images/machdev-logo.png"/>
        <Segment as='h3'  className= 'bg-secondary justfiy-content-center text-white'textAlign='center'>We have the knowledge and experience to take care of clients, from Front-End, Network, Servers, Web Hosting, and Cloud solutions. With our wide variety of services; this allows us to give you the total solution.</Segment>
      </Grid.Column>
   

  </Grid>

)



export default HpGrid