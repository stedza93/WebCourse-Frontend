import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/" component={Home}></Route>
      <Route
        path="/about"
        render={() => <About title="About Us"></About>}
      ></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
