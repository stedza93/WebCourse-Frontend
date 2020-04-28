import React from "react";
// console.log(React,ReactDOM) /*testiranje da li smo pravilno ukljucili biblioteke*/
export const Student = (props) => {
  console.log(props);
  // return React.createElement("div", {}, [
  //   React.createElement("h2", {}, props.name),
  //   React.createElement("h5", {}, props.fakultet),
  //   React.createElement("hr"),
  // ]);
  return (<div>
    <h2>{props.name}</h2>
    <h3>{props.fakultet}</h3>
    <hr></hr>
  </div>);
};
