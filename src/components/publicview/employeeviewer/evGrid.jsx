import React from 'react'
import { Grid, Image, Item, Segment } from 'semantic-ui-react'

const EvGrid = ({single}) => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src="https://via.placeholder.com/150" />
          <Segment>{single.name}</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EvGrid