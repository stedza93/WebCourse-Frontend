import { useEffect, useRef, useState } from "react";
export const Child = (props) => {
    const { handleClickFromChild } = props;
  useEffect(() => {
    handleClickFromChild();
    console.log("izvrsena useefect child funkcija")
  }, [handleClickFromChild]);
  return (
    <div>
      {" "}
      Child komponenta
      <br></br>
      <button onClick={() => handleClickFromChild()}> Click me!</button>
    </div>
  );
};
