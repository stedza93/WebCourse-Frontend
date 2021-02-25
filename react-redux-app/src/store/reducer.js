import { INCREMENT } from "./actionTypes";

const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, counter: state.counter + 1 };
  }
  else if(action.type === "ADD_FIVE") {
    return { ...state, counter: state.counter + 5 };
  }
 
  return state;
};
