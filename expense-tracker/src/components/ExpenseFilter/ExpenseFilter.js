import React, { useContext } from 'react';
import { ExpenseContext } from '../../App';

import './ExpenseFilter.css';

const ExpenseFilter = () => {
  const {dispatch} = useContext(ExpenseContext);

  const selectHandler = (event) => {
    dispatch({type: 'SET_FILTER_YEAR', payload: parseInt(event.target.value) || null});
  }

  return (
    <div className='expense-filter'>
      <label>Filter by year</label>
      <select onChange={selectHandler} className='expense-filter__control'>
        <option value={null}>---</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;