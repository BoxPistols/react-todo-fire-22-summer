import React from 'react';

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({ todoList, deleteTodo }) => (
  <div>
    {/*受け取ったtodoListを使って表示する*/}
    {todoList.map((todo, id) => (
      <div className="flex flex-jc-between flex-ai-center">
        <div>{todo}</div>
        <button onClick={() => deleteTodo(id)}>削除</button>
      </div>
    ))}
  </div>
);

export default Todo;
