import React, { createContext, ReactNode, useState } from 'react';
import { OnAddTodo, OnRemoveTodo, Todo } from '../../models/todo';

export type TodoContextType = {
  todos: Todo[];
  addTodo: OnAddTodo;
  removeTodo: OnRemoveTodo;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoProvider: React.FC<{children: ReactNode}> = (props) => {
  const [todos, setTodos] = useState([
    new Todo('Learn React', 1662572388456),
    new Todo('Learn Typescript', 1662572388457),
  ]);

  const addTodoHandler: OnAddTodo = (text: string) => {
    setTodos((todos) => [...todos, new Todo(text)]);
  };

  const removeTodoHandler: OnRemoveTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
