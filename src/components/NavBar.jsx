import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"} className="brand">
        Brand
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
}
