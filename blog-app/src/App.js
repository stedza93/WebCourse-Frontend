import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import { NavBar } from "./components/Navbar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SignIn from "./components/Login";
import { PrivateRoute } from "./PrivateRoute";
import { makeStyles } from "@material-ui/core";
import { SingleBlog } from "./components/SingleBlog";
import Dashboard from "./components/admin/Dashboard";
import { AuthContextProvider } from "./contexts/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <div>
            <NavBar classes={classes}></NavBar>
            <Route exact path="/" component={Blog} />
            <Route path="/login" component={SignIn} />
            <Route path="/blog/:id" component={SingleBlog} />
            {/* <Route path="/admin" component={Dashboard} /> */}
            <PrivateRoute path="/admin" component={Dashboard} />
            <Route path="/login" component={SignIn} />
          </div>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
