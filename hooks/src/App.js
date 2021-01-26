import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  // const updateCounter = ()=>{
  //   let a = counter+1;
  //   setCounter(a)
  // }
  console.log("rerendered")
  return <div className="App">{counter}
  <button onClick={()=>setCounter(prevState=>prevState+1)}>Count + 1</button>
  
  </div>;
}

export default App;
