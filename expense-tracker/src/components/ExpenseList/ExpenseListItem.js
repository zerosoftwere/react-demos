import './ExpenseListItem.css';
import PropTypes from 'prop-types';
import ExpenseDate from '../../elements/ExpenseDate';
import Card from '../../elements/Card/Card';

export const ExpenseListItem = ({expense}) => {
  return (
    <Card className='expense'>
      <ExpenseDate date={expense.date}/>
      <h2 className='expense__title'>{expense.title}</h2>
      <Card className='expense__amount'>${expense.amount.toFixed(2)}</Card>
    </Card>
  )
}

ExpenseListItem.propTypes = {
  expense: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    amount: PropTypes.number
  })
};

export default ExpenseListItem;