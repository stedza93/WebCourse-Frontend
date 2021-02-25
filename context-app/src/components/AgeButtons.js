import React, { useContext, useState } from "react";
import { AgeContext } from "../context/ageContext";

export const AgeButtons = () => {
  const [number, setNumber] = useState(0);
  const ageContext = useContext(AgeContext);
  console.log(ageContext);
  return (
    <div>
      <p>Current age: {ageContext.age}</p>
      <button onClick={() => ageContext.dispatch({ type: "ADD_ONE" })}>
        Add 1
      </button>{" "}
      <br />
      <br />
      <button onClick={() => ageContext.dispatch({ type: "ADD_THREE" })}>
        Add 3
      </button>
      <br />
      <br />
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => ageContext.dispatch({ type: "ADD_NUM", num: number })}
      >
        {" "}
        Add {number}{" "}
      </button>
    </div>
  );
};
