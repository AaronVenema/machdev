import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const Statistics = () => (
  <Statistic.Group widths='three'>
    <Statistic>
      <Statistic.Value text >
        <br></br>
        <br></br>
        <Icon name='building outline' className='bg-dark text-white'/></Statistic.Value>
      <Statistic.Label className='text-white'>12,000 Businesses</Statistic.Label>
    </Statistic>
   
    <Statistic>
      <Statistic.Value className='text-white' text>
      <br></br>
      <br></br>
        300
      </Statistic.Value>
      <Statistic.Label className='text-white'>Awards</Statistic.Label>
    </Statistic>


    <Statistic>
      <Statistic.Value text>
      <br></br><br></br>
        <Image src='/images/joe.jpeg' className='circular inline' /></Statistic.Value>
      <Statistic.Label className='text-white'>42,000 Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default Statistics
