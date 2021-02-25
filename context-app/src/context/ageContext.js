import React, { createContext, useReducer, useState } from "react";

export const AgeContext = createContext();

const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_THREE":
      return state + 3;
    case "ADD_NUM":
      return state + Number(action.num);
    default:
      return state;
  }
};

export const AgeContextProvider = (props) => {
  // const [age, setAge] = useState(20);
  const [age, dispatch] = useReducer(ageReducer, 20);

  return (
    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  );
};
