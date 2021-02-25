import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export const FunctionalComp = () => {
 const counter = useSelector((store) => store.counter);
 const name = useSelector((store) => store.name);
 const store = useStore();
 console.log(store);
 const dispatch = useDispatch();
 const addOne = () => {
   dispatch({ type: "INCREMENT" });
 };
 return (
   <div>
     {counter}
     
     <button onClick={() => addOne()}>Dodaj jedan</button><br/>
     {name} 
   </div>
 );
};
