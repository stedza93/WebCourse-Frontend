import React from "react";
import "./App.css";
import { User } from "./User";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userInfo: {
        name: "John",
        job: "Developer",
        bio: "Matthew is an interior designer living in New York.",
      },
      allUsers: [],
    };
    this.setCounter = this.setCounter.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonblob.com/api/16de3326-8d42-11ea-91b5-63d2dfd126db")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let allUsers = response;
        this.setState({ allUsers, loading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, this.state);
  }
  usersToShow() {
    let allUsers = this.state.allUsers;
    return allUsers.map((el, index) => {
      return <User userInfo={el} key={index}></User>;
    });
  }
  setCounter() {
    console.log(this);
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
    if (this.state.loading === true) {
      return (
        <div className="ui segment" style={{ width: "100%", height: "100vh" }}>
          <div className="ui active dimmer">
            <div className="ui indeterminate text loader">Preparing Files</div>
          </div>
          <p></p>
        </div>
      );
    }
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
      <div style={{ padding: "20px" }}>
        <button
          className="ui right labeled icon button"
          style={{ margin: "20px" }}
          onClick={this.setCounter}
        >
          <i className="right arrow icon"></i>
          Next
        </button>
        <div className="ui link cards">{this.usersToShow()}</div>
      </div>
    );
  }
}

export default App;
