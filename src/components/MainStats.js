import React from "react";
import {Segment, Grid} from 'semantic-ui-react';
import DisplayBalance from "./DisplayBalance";

function MainStats({textAlignValue="", columns, incomeTotal, expenseTotal}) {
    return (
        <Segment textAlign={textAlignValue}>
        <Grid columns={columns} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance size='tiny' color='green' textAlignValue='left' label="Incoming:" value={incomeTotal}></DisplayBalance>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance size='tiny' color='red' textAlignValue='left' label="Expenses:" value={expenseTotal}></DisplayBalance>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    )
}

export default MainStats;