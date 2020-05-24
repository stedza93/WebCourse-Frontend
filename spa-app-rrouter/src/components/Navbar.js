import React from "react";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
