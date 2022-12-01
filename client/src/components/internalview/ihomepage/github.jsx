import {List, Image} from 'semantic-ui-react'


const Github = () => (

    
    <List widths='four'>
<List.Item href='https://github.com/Hahkeye'>
  <Image avatar src='/images/image1.png' />
  <List.Content>
    <List.Header>Hunter</List.Header>
  </List.Content>
</List.Item>
<List.Item href="https://github.com/AaronVenema" >
  <Image avatar src='/images/image2.png' />
  <List.Content>
    <List.Header>Aaron</List.Header>
  </List.Content>
</List.Item>
<List.Item href='https://github.com/fortu038'>
  <Image avatar src='/images/image3.jpeg' />
  <List.Content>
    <List.Header>Conor</List.Header>
  </List.Content>
</List.Item>
<List.Item href="https://github.com/Mimimoha">
  <Image avatar src='/images/image4.jpeg' />
  <List.Content>
    <List.Header>Mariam</List.Header>
  </List.Content>
</List.Item>
</List>
    )

    export default Github