import React from "react";
import apiCall from "../services/apiCall";
export const Home = () => {
  function getAllUsers() {
   apiCall().then((res) => console.log(res));
  }
  function getMojombo() {
    apiCall('mojombo').then((res) => console.log(res));
   }
 
  return (
    <React.Fragment>
      <h1>Home</h1>
      <button onClick={getAllUsers}> Get all users</button>
      <button onClick={getMojombo}> Get Mojombo</button>
    </React.Fragment>
  );
};
