import React from "react";
import { render } from "react-dom";
import { Student } from "./Student";
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", { key: 2 }, "Studenti:"),
  //   React.createElement(Student, { name: "Marko", fakultet: "FPN" }),
  //   React.createElement(Student, { name: "Maja", fakultet: "Maja" }),
  //   React.createElement(Student, { name: "Mirko", fakultet: "ETF" }),
  // ]);
  return(
    <div>
      <h1>Studenti:</h1>
      <Student name="Marko" fakultet="FPN"></Student>
      <Student name="Maja" fakultet="PMF"></Student>
      <Student name="Mirko" fakultet="ETF"></Student>
    </div>
  )
};
render(React.createElement(App), document.getElementById("root"));
