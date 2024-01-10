import React from "react";
import {Segment, Grid} from 'semantic-ui-react';
import MainStatistic from "./MainStatistic";

function MainStats({textAlignValue="", columns}) {
    return (
        <Segment textAlign={textAlignValue}>
        <Grid columns={columns} divided>
          <Grid.Row>
            <Grid.Column>
            <MainStatistic size='tiny' color='green' textAlignValue='left' label="Incoming:" value="1,045.34"></MainStatistic>
            </Grid.Column>
            <Grid.Column>
            <MainStatistic size='tiny' color='red' textAlignValue='left' label="Expenses:" value="7,085.22"></MainStatistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    )
}

export default MainStats;