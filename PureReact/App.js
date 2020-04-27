// console.log(React,ReactDOM) /*testiranje da li smo pravilno ukljucili biblioteke*/

const Student = (props) => {
  console.log(props);
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Marko"),
    React.createElement("h2", {}, "Maja"),
    React.createElement("h2", {}, "Mirko"),
    React.createElement("hr"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 2 }, "Studenti:"),
    React.createElement(Student, { name: "Marko", fakultet: "FPN" }),
    React.createElement(Student, { name: "Maja", fakultet: "PMF" }),
    React.createElement(Student, { name: "Mirko", fakultet: "ETF" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
