import React, { useState } from 'react';
import Todo from './Todo';
import 'asagiri';
import './style.css';

export default function App() {
  // input
  const [input, setInput] = useState('');
  // list
  const [todoList, setTodoList] = useState(['init']);

  // add todo
  const addTodo = () => {
    setTodoList([...todoList, input]);
    setInput('');
  };
  console.log(input); // input text
  console.log(todoList);

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <selection className="section">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={() => addTodo()}>追加</button>

        <Todo todoList={todoList} deleteTodo={deleteTodo} />
      </selection>
    </div>
  );
}
