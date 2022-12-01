import React from 'react'
import { Header, Image, Segment, Statistic, Icon } from 'semantic-ui-react'

const HpGrid = () => (
  <Segment className='bg-secondary justfiy-content-center' >



    <Header as='h2' icon textAlign='center'>
      <Header.Content>Welcome to MACHDEV, where you can find solutions for all your tech needs.</Header.Content>
    </Header>
    <Image src="/images/machdev-logo.png" size='huge' centered/>
    <Header as='h3' icon textAlign='center'>
      <Header.Content>We have the knowledge and experience to take care of clients, from Front-End, Network, Servers, Web Hosting, and Cloud solutions. With our wide variety of services; this allows us to give you the total solution.
      </Header.Content>
    </Header>
    <Statistic.Group widths='three'>
    <Statistic>
      <Statistic.Value text >
       
        <Icon name='building'/></Statistic.Value>
      <Statistic.Label className='text-black'>12,000 Businesses</Statistic.Label>
    </Statistic>
   
    <Statistic>
      <Statistic.Value className='text-black' text>
      
        300
      </Statistic.Value>
      <Statistic.Label className='text-black'>Awards</Statistic.Label>
    </Statistic>


    <Statistic>
      <Statistic.Value text>
        <Icon name='user' /></Statistic.Value>
      <Statistic.Label className='text-black'>42,000 Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>

  </Segment>

)



export default HpGrid