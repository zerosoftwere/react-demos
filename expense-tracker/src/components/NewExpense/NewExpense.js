import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../../App';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const {dispatch} = useContext(ExpenseContext);

  const saveExpense = expense => {
    dispatch({type: 'SAVE_EXPENSE', payload: expense})
    closeNewExpenseDialog(false);
  };

  const openNewExpenseDialog = () => setOpenDialog(true);
  const closeNewExpenseDialog = () => setOpenDialog(false);

  return (
    <div className='new-expense'>
      {
        openDialog ? <ExpenseForm onSubmit={saveExpense} onCancel={closeNewExpenseDialog}/> : 
        <div className='new-expense__add-expense'>
          <button className='btn btn-primary' onClick={openNewExpenseDialog}>Add New Expense</button>
        </div>
      }
    </div>
  );
}

export default NewExpense;