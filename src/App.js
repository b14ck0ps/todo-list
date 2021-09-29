import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';
import React, { useState } from 'react';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;
