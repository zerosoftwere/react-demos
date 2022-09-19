import TodoProvider from './components/context/TodoContext';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {

  return (
    <TodoProvider>
      <NewTodo />
      <Todos />
    </TodoProvider>
  );
}

export default App;
