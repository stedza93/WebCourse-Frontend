import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Users } from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Users></Users>
      </div>
    );
  }
}

export default App;
