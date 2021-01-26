import { useCallback, useEffect, useRef, useState } from "react";
import { Child } from "./Child";
function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [random, setRandom] = useState(() => {
    return Math.random();
  });
  const inputText = useRef();
  const savedVar = useRef(1);
  let myVar = 1;
  const handleClickMeButton = useCallback(() => {
    console.log("parent log click me function");
  }, []);
  // useEffect(()=>{
  //   console.log("izvrsena useEffect fja")
  // })
  // useEffect(()=>{
  //   console.log("Izvrsena useEffect sa []")
  // },[])

  // useEffect(()=>{
  //   console.log("Izvrsena useEffect sa [random]");
  //   return ()=>{
  //     console.log(random, "izvrsena cleanUp f-ja")
  //   }
  // },[random])

  useEffect(() => {
    const intervalId = setTimeout(() => search && searchApi(), 500);
    const searchApi = () => {
      console.log("searching...");
      myVar++;
      savedVar.current++;
    };
    return () => {
      console.log(intervalId);
      clearInterval(intervalId);
    };
  }, [search]);
  // const updateCounter = () => {
  //   // let a = counter+1;
  //   setCounter(2);
  //   setRandom(123);
  // };
  console.log(savedVar, myVar, "use ref vs variable");
  return (
    <div className="App">
      {counter}
      <button onClick={() => inputText.current.focus()}>Search </button>{" "}
      <br></br>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Count + 1
      </button>{" "}
      <br></br>
      <p>Random value: {random}</p>
      <button onClick={() => setRandom(Math.random())}>Randomize</button>{" "}
      <br></br>
      <label htmlFor="search">Search</label> <br></br>
      <input
        ref={inputText}
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Child handleClickFromChild={handleClickMeButton}></Child>
    </div>
  );
}

export default App;
