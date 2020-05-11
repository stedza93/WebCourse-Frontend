import React from "react";
import "./App.css";
function User() {
  return (
    <div className="card">
      <div className="image">
        <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <i className="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  );
}
function App() {
  // const text = "Hello world!",
  //   myNumber = 123,
  //   myArray = [1, 2, 3],
  //   myObject = { name: "John", job: "Developer" },
  //   containerStyle = {
  //     background: "red",
  //     marginTop: "20px",
  //     padding: "20px",
  //     color: "#fff",
  //   };
  return (
    // <div style={containerStyle} className="container-wrapper">
    //   <ul>
    //     <li>{text}</li>
    //     <li>{myNumber}</li>
    //     <li>{myArray}</li>
    //     {/* <li>{myObject}</li>  greska, ne moze prikazati objekat*/}
    //     <li>
    //       Name: {myObject.name}, Job: {myObject.job}
    //     </li>
    //     {myNumber === 123 ? "Tacan broj" : "Pogresan broj"}
    //   </ul>
    //   <label htmlFor="name">Name:</label> <br></br>
    //   <input type="text" id="name"></input>
    // </div>
    <div>
      <div className="ui link cards">
        <User></User>
        <User></User>
        <User></User>
      </div>
    </div>
  );
}

export default App;
