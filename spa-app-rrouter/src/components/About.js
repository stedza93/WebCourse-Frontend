import React from "react";
import myHoc from './myHoc'
function About(props) {
  console.log(props)
  return <div>{props.title}</div>;
}
export default myHoc(About)
