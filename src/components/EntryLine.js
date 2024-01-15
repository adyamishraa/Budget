import React from "react";
import {Segment, Grid, Icon} from 'semantic-ui-react';

function EntryLine({id, description, value, isExpense,deleteEntry, setIsOpen, editEntry}) {
  return (
      <>
        <Segment color={isExpense?'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>{description}</Grid.Column>
            <Grid.Column width={3}>$ {value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={()=>editEntry(id)}></Icon>
              <Icon name='trash' onClick={()=>deleteEntry(id)}></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </>
    )
}

export default EntryLine;