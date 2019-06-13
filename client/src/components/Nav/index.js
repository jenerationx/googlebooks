import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
       <h3>Google Books Search</h3> 
      </a>
      <div className="ml-auto">
        <ul className="nav navbar-nav">
          <li>
              <a className="nav-link" href="/">Search Books</a>
          </li>
          <li>
              <a className="nav-link" href="/saved">Saved Books</a>
          </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
