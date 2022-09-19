import PropTypes from 'prop-types';

import './ExpenseDate.css';
import Card from '../elements/Card/Card';

const ExpenseDate = ({date}) => {
  return (
    <Card className='expense-date'>
      <span className='expense-date__day'>{date.toLocaleString('en-US', {day: 'numeric'})}</span>
      <span className='expense-date__month'>{date.toLocaleString('en-US', {month: 'long'})}</span>
      <span className='expense-date__year'>{date.toLocaleString('en-US', {year: 'numeric'})}</span>
    </Card>);
};

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date)
};

export default ExpenseDate;