import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
      <Home></Home>
      <Contact></Contact>
      <About></About>
    </div>
  );
}

export default App;
