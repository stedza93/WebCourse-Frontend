import React from "react";

class App extends React.Component {
  state = {
    todoName: "",
    todos: [
      { id: 1, content: "Uradi vjezbe" },
      { id: 2, content: "Prosetaj psa" },
    ],
  };
  render() {
    return <div className="App"></div>;
  }
}

export default App;
