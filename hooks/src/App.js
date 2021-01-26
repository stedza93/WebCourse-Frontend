import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [random, setRandom] = useState(() => {
    return Math.random();
  });
  useEffect(()=>{
    console.log("izvrsena useEffect fja")
  })
  useEffect(()=>{
    console.log("Izvrsena useEffect sa []") 
  },[])

  useEffect(()=>{
    console.log("Izvrsena useEffect sa [random]") 
  },[random])
  // const updateCounter = () => {
  //   // let a = counter+1;
  //   setCounter(2);
  //   setRandom(123);
  // };

  return (
    <div className="App">
      {counter}
      {/* <button onClick={() => updateCounter()}>Count + 1</button> <br></br> */}
      <button onClick={()=>setCounter(prevState=>prevState+1)}>Count + 1</button> <br></br>
      <p>Random value: {random}</p>
      <button onClick={()=>setRandom(Math.random())}>Randomize</button> <br></br>
    </div>
  );
}

export default App;
