import React, { useContext, useRef } from 'react';
import { TodoContext } from './context/TodoContext';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
	const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textRef.current!.value;
    if (text.trim()) todoCtx.addTodo(text);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
