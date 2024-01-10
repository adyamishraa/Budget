import React from "react";
import {Segment, Grid, Icon} from 'semantic-ui-react';

function EntryLine({isExpense, columns, description, value}) {
    return (
        <Segment color={isExpense?'red':'green'}>
        <Grid columns={columns} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>{description}</Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default EntryLine;