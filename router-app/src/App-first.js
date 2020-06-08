import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Users } from "./components/Users";

class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users").then((res) =>
      res.json().then((res) => {
        let users = res.slice(0, 5);
        this.setState({ users });
      })
    );
  }
  generateLinks = () => {
    let userLinks = this.state.users.map((user) => (
      <Link key={user.id} to={`/users/${user.login}`}>
        {user.login} <br />
      </Link>
    ));
    return userLinks;
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            {this.generateLinks()}
            <Route path="/users/:id" component={Users} />
            {/* <Route path="/(users|user|accounts)/" component={Users} /> */}
            <Route  path="*" render={() => <h1>404 Not Found</h1>}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
