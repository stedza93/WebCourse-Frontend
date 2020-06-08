import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { auth } from "./auth/authService";
class App extends React.Component {
  state = {
    isAuth: auth.getAuthStatus(),
  };
  toggleAuth = (isAuth) => {
    if(isAuth){
      auth.login();
      this.setState({isAuth})
    }
    else{
      auth.logout()
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          >
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
           {this.state.isAuth?<button onClick={()=>this.toggleAuth(false)}>Logout</button>:<button onClick={() => this.toggleAuth(true)}>Login</button>} 
          
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute
              component={Dashboard}
              path="/dashboard"
            ></PrivateRoute>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
