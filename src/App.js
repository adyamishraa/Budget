import './App.css';
import {Container, Grid, Icon, Segment, Statistic} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import MainStatistic from './components/MainStatistic';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>
      <MainStatistic size='small' label="Your Balance:" value="2,550.53"></MainStatistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <MainStatistic size='tiny' color='green' textAlignValue='left' label="Incoming:" value="1,045.34"></MainStatistic>

              {/* <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: "left"}}>Incoming:</Statistic.Label>
                <Statistic.Value>1,045.34</Statistic.Value>
              </Statistic> */}
            </Grid.Column>
            <Grid.Column>
            <MainStatistic size='tiny' color='red' textAlignValue='left' label="Expenses:" value="7,085.22"></MainStatistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h1"/>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Something</Grid.Column>
            <Grid.Column width={3}>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Something else</Grid.Column>
            <Grid.Column width={3}>$10,000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Something</Grid.Column>
            <Grid.Column width={3}>$20,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title="Add New Transaction" type="h1"/>

      {/* <Header as='h3'>Add New Transaction</Header> */}
     <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
