import React from 'react'
import { Header, Icon, Image, Segment, List } from 'semantic-ui-react'




const IhpGrid = () => (

  <Segment className='bg-secondary justfiy-content-center'>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users ' circular />
      <Header.Content>Developer Portal</Header.Content>
    </Header>
    <Image src='/images/machdev-logo.png' size='huge' centered />
    <List horizontal animated>
      <List.Item>
        <Image avatar src='/images/image1.png'/>
        <List.Content href= 'https://github.com/Hahkeye'>
          <List.Header>Hunter</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/images/image2.png' />
        <List.Content href="https://github.com/AaronVenema" >
          <List.Header>Aaron</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/images/image3.jpeg' />
        <List.Content href='https://github.com/fortu038'>
          <List.Header>Conor</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/images/image4.jpeg'/>
        <List.Content href="https://github.com/Mimimoha">
          <List.Header>Mariam</List.Header>
        </List.Content>
      </List.Item>
    </List>

  </Segment>

)

export default IhpGrid
