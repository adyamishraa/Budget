import './App.css';
import {Button, Container, Form, FormInput, Grid, Header, Icon, Segment, Statistic} from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: "left"}}>Incoming:</Statistic.Label>
                <Statistic.Value>1,045.34</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign: "left"}}>Expenses:</Statistic.Label>
                <Statistic.Value>7,085.22</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

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

      <Header as='h3'>Add New Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon="tags" 
            width={12} 
            label="Description" 
            placeholder="New shinny thing"></Form.Input>
            <Form.Input 
              width={4}
              label="Value"
              placeholder="100.00"
              icon='dollar'
              iconPosition='left'></Form.Input>
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
