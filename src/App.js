import './App.css';
import {Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import MainStatistic from './components/MainStatistic';
import MainStats from './components/MainStats';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>
      <MainStatistic size='small' label="Your Balance:" value="2,550.53"/>
      <MainStats textAlignValue='center' columns={2}/>
      <MainHeader title="History" type="h1"/>
      <EntryLine isExpense columns={3} description="Something" value="$10,00"/>
      <EntryLine columns={3} description="Something else" value="$10,000"/>
      <MainHeader title="Add New Transaction" type="h1"/>
      {/* <Header as='h3'>Add New Transaction</Header> */}
     <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
