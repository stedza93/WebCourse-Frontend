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
  render() {
    return (
      <div className="container">
        <h1 className="center">Todo List</h1>
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
