import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [random, setRandom] = useState(() => {
    return Math.random();
  });
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

  return (
    <div className="App">
      {counter}
      {/* <button onClick={() => updateCounter()}>Count + 1</button> <br></br> */}
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Count + 1
      </button>{" "}
      <br></br>
      <p>Random value: {random}</p>
      <button onClick={() => setRandom(Math.random())}>Randomize</button>{" "}
      <br></br>
      <label htmlFor="search">Search</label> <br></br>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default App;
