import React from "react";
import { Link,NavLink, withRouter  } from "react-router-dom";
function Navbar(props) {
    console.log(props)
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NavLink to={{ pathname: "/contact", josNesto: true }}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
