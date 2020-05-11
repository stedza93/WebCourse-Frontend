import React from "react";
import "./App.css";

function App() {
  const text = "Hello world!",
    myNumber = 123,
    myArray = [1, 2, 3],
    myObject = { name: "John", job: "Developer" };
  return (
    <div
      style={{
        background: "red",
        marginTop: "20px",
        padding: "20px",
        color: "#fff",
      }}
    >
      <ul>
        <li>{text}</li>
        <li>{myNumber}</li>
        <li>{myArray}</li>
        {/* <li>{myObject}</li>  greska, ne moze prikazati objekat*/}
        <li>
          Name: {myObject.name}, Job: {myObject.job}
        </li>
        {myNumber === 123 ? "Tacan broj" : "Pogresan broj"}
      </ul>
    </div>
  );
}

export default App;
