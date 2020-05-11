import React from "react";
import "./App.css";
import { User } from "./User";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "John",
        job: "Developer",
        bio: "Matthew is an interior designer living in New York.",
      },
    };
  
  }
  componentDidMount(){
    fetch("https://jsonblob.com/api/16de3326-8d42-11ea-91b5-63d2dfd126db")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      this.setState({userInfo:response[0]})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
  render() {
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
          <User userInfo={this.state.userInfo}></User>
        </div>
      </div>
    );
  }
}

export default App;
