import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add products</Link>
        </li>
        <li>
          <Link to="/update">Update products</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
