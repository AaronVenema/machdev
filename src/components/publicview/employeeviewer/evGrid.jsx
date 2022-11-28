import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const EvGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="/assets/cfo-logo.png"/>
        <Segment>CFO</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/seo-logo.png"/>
        <Segment>SEO</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/head-architect-logo.png"/>
        <Segment>Head Architect</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src="/assets/lead-logo.png" />
        <Segment>Lead</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/alp-logo.png"/>
        <Segment>ALP</Segment>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://via.placeholder.com/150" />
        <Segment>Developers</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default EvGrid