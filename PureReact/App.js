   // console.log(React,ReactDOM) /*testiranje da li smo pravilno ukljucili biblioteke*/
   const App = () => {
    return React.createElement(
      "div",
      {},
      [React.createElement("h1", {key:2}, "Student"),React.createElement("h1", {key:1}, "Student")]
    );
  };
  ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
  );