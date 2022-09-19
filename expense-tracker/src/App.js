import { createContext, useReducer } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const initialState = {
  expenses: [
    {id: 'e1', title: 'Hello', date: new Date(2022, 0, 15), amount: 40},
    {id: 'e2', title: 'World', date: new Date(2022, 3, 1), amount: 20},
    {id: 'e3', title: 'Two Loaf of Bread', date: new Date(2019, 10, 24), amount: 10},
  ],
  filterYear: null
};

export const ExpenseContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_EXPENSE':
      return {...state, expenses: [action.payload, ...state.expenses]}
    case 'SET_FILTER_YEAR':
      return {...state, filterYear: action.payload}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={{state, dispatch}}>
      <div className="container">
        <NewExpense/>
        <ExpenseList/>
      </div>
    </ExpenseContext.Provider>
  );
}

export default App;
