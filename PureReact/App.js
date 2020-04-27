// console.log(React,ReactDOM) /*testiranje da li smo pravilno ukljucili biblioteke*/

const Student = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Marko"),
    React.createElement("h2", {}, "Maja"),
    React.createElement("h2", {}, "Mirko"),
    React.createElement("hr")
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 2 }, "Studenti:"),
    React.createElement(Student),
    React.createElement(Student),
    React.createElement(Student)
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
