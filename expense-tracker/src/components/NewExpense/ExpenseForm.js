import React, { useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSubmit, onCancel}) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const value = {
      title: titleRef.current.value,
      amount: parseFloat(amountRef.current.value),
      date: new Date(dateRef.current.value),
    }

    onSubmit(value);
  }

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Title</label>
        <input className="form-control"
          ref={titleRef}/>
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input className="form-control"
          type="number" step=".1" min={0}
          ref={amountRef}/>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input className="form-control" 
          type='date' min='2019-01-12' max='2022-12-31'
          ref={dateRef}/>
      </div>
      <div className="form-action">
        <button type='button' className="btn btn-primary" onClick={onCancel}>Cancel</button>
        <button type='submit' className="btn btn-primary">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
