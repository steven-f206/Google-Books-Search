import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Google Books</h3>
      <ul className="nav-links">
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/saved'>
        <li>Saved</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav