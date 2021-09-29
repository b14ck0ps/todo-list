import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}
export default App;
