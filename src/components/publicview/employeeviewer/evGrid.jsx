import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const EvGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Sam</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Sam</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Sam</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Developers</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Developers</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Developers</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default EvGrid