import React from 'react'
import { Grid, Image, Item, Segment } from 'semantic-ui-react'

const EvGrid = ({single}) => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src={`images/${single.pic}`} />
          <Segment>{single.firstName}</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EvGrid