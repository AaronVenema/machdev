import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const DvGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="/assets/administrator-logo.png" />
        <Segment>Administrator</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/human-resources-logo.png"  />
        <Segment>HR</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/managment-logo.png"  />
        <Segment>Management</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src="/assets/sales-logo.png"  />
        <Segment>Sales</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/Marketing-logo.png"  />
        <Segment>Marketing</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/devops-logo.png" />
        <Segment>DevOps</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default DvGrid