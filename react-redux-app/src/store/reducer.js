import { INCREMENT } from "./actionTypes";

const initialState = {
  name: "test",
  counter: 0,
};
export const reducer = (state = initialState, action) => {
  //   if (action.type === INCREMENT) {
  //     return { ...state, counter: state.counter + 1 };
  //   }
  //   else if(action.type === "ADD_FIVE") {
  //     return { ...state, counter: state.counter + 5 };
  //   }

  //   return state;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_FIVE":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      return state;
  }
};
