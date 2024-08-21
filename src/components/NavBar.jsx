import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
export default function NavBar({ themeToggle, themeMode }) {
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
      <DarkModeToggle themeToggle={themeToggle} themeMode={themeMode} />
    </div>
  );
}
