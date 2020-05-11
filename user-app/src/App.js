import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const text = "Hello world!",
    myNumber = 123,
    myArray = [1, 2, 3],
    myObject = { name: "John", job: "Developer" };
  return (
    <div>
      <ul>
        <li>{text}</li>
        <li>{myNumber}</li>
        <li>{myArray}</li>
        {/* <li>{myObject}</li> */}
        <li>
          Name: {myObject.name}, Job: {myObject.job}
        </li>
      </ul>
    </div>
  );
}

export default App;
