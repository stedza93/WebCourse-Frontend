const redux = require("redux");

const initalState = {
  // name:"test",
  counter: 0,
};
// REDUCER
const rootReducer = (state = initalState, action) => {
  if (action.type === "INC_COUNTER") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "ADD_VALUE") {
    return { ...state, counter: state.counter + action.value };
  }
  return state;
};
// STATE
const store = redux.createStore(rootReducer);

//SUBSCRIPTION
store.subscribe(() => {
    console.log("state is changed", store.getState());
  });
  
// DISPATCHING
store.dispatch({ type: "INC_COUNTER" });

store.dispatch({ type: "ADD_VALUE", value: 10 });

