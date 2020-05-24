import React from "react";
const Todos = ({ todos }) => {
  console.log(todos);
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <input type="checkbox" checked={todo.checked}></input>
        </div>
      );
    })
  ) : (
    <p className="center">Svi taskovi su zavrseni</p>
  );
  return <div className="collection">{todoList}</div>;
};

export default Todos;
