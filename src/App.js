import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import MainStats from './components/MainStats';
import { useEffect, useState } from 'react';
import EntryLineLooping from './components/EntryLineLooping';
import ModalEdit from './components/ModalEdit';
import { legacy_createStore as createStore, combineReducers } from 'redux';

function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    if(!isOpen && entryId) {
      const index = entries.findIndex((entry)=>entry.id===entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  },[isOpen]);
  //eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(()=>{
    let totalIncomes = 0; 
    let totalExpenses = 0;
    entries.map((entry)=>{
      if(entry.isExpense) {
        return totalExpenses+=Number(entry.value);
      } else {
        return totalIncomes+=Number(entry.value);
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
  }, [entries])

  /// store

  function entriesReducer(state = initialEntries, action) {
   let newEntries;
   switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({...action.payload});
      return newEntries;
    case 'REMOVE_ENTRY': 
      newEntries = state.concat({...action.payload});
      return newEntries;
    default: return newEntries;
   }
  };

  const combinedReducers = combineReducers ({
    entries: entriesReducer,
  });

  const store = createStore(combinedReducers);

  store.subscribe(()=>{
    console.log('store:', store.getState());
  })

  // const payloadRemove = {
  //   id: 1
  // };

  const payloadAdd = {
    id: entries.length+1,
    description: "Hello from Redux",
    value: 100,
    isExpense: false
  };

  function addEntryRedux(payload) {
    return {type: 'ADD_ENTRY', payload: payloadAdd, };
  }

  function removeEntryRedux(id) {
    return {type: 'REMOVE_ENTRY', payload: {id}, };
  }
  store.dispatch(addEntryRedux(payloadAdd));
  store.dispatch(removeEntryRedux(1));

  ///

  function deleteEntry(id) {
    const result = entries.filter((entry) => id !== entry.id);
    setEntries(result);
  };

  function editEntry(id) {
    if(id) {
      const index = entries.findIndex((entry)=>id===entry.id);
      const entry= entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      value,
      description,
      isExpense
    });
    setEntries(result);
    resetEntry();
  };

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size='small' label="Your Balance:" value={total} />
      <MainStats textAlignValue='center' columns={2} incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h1" />
      <EntryLineLooping deleteEntry={deleteEntry} entries={entries} setIsOpen={setIsOpen} editEntry={editEntry}/>
      <MainHeader title="Add New Transaction" type="h1" />
      {/* <Header as='h3'>Add New Transaction</Header> */}
      <NewEntryForm addEntry={addEntry}
        description={description} setDescription={setDescription}
        value={value} setValue={setValue}
        isExpense={isExpense} setIsExpense={setIsExpense} />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} 
      description={description} setDescription={setDescription}
      value={value} setValue={setValue}
      isExpense={isExpense} setIsExpense={setIsExpense}/>

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: 10000,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water Bill',
    value: 2000,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50,
    isExpense: true
  }
];
