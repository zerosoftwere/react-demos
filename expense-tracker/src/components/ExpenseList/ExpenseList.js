import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ExpenseContext } from '../../App';
import ExpenseListItem from './ExpenseListItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../../elements/Card/Card';
import './ExpenseList.css'
import ExpenseChart from '../ExpenseChart/ExpenseChart';

const ExpenseList = () => {
  const {state: {expenses, filterYear}} = useContext(ExpenseContext);
  const filteredExpenses = filterYear ? 
    expenses.filter(expense => expense.date.getFullYear() === filterYear) : expenses;
  
  return (
    <Card className='expense-list'>
      <ExpenseFilter/>
      <ExpenseChart expenses={filteredExpenses}/>
      {filteredExpenses.length ? filteredExpenses
        .map((expense, i) => <ExpenseListItem key={i} expense={expense}/>)
        : <p className='expense-list__fallback'>No expenses found.</p>}
    </Card>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    amount: PropTypes.number
  }))
}

export default ExpenseList;
