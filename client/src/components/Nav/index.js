import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <ul className="nav navbar-nav ml-auto">
          <li>
              <a className="nav-link" href="/">Search Books</a>
          </li>
          <li>
              <a className="nav-link" href="/saved">Saved Books</a>
          </li>
      </ul>
    </nav>
  );
}

export default Nav;
