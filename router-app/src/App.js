import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          >
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute component={Dashboard} path="/dashboard"></PrivateRoute>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
