import React from "react";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    todoName: "",
    todos: [
      { id: 1, content: "Uradi vjezbe" },
      { id: 2, content: "Prosetaj psa" },
    ],
  };
  addTodo = (e) => {
    e.preventDefault();
    let newTodos = this.state.todos;
    let newElement = {
      id: this.state.todos.length + 2,
      content: this.state.todoName,
    };
    newTodos.push(newElement);
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center">Todo List</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.todoName}
            onChange={(e) => this.setState({ todoName: e.target.value })}
          ></input>
        </form>
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
