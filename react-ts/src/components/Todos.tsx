import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={todoCtx.removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
