import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Users } from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path="/(users|user|accounts)/" component={Users} />
          <Route path="*" render={()=><h1>404 Not Found</h1>}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
