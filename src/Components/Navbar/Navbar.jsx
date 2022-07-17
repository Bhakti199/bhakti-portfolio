import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyleOfActiveLink = ({ isActive }) => ({
    color: isActive && "#684c97",
    backgroundColor: isActive && "white",
    padding: "3px 7px ",
    borderRadius: "7px",
  });
  return (
    <div className="navlinks">
      <NavLink
        to="/"
        className="link nav-items pointer"
        style={getStyleOfActiveLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className="link nav-items pointer"
        style={getStyleOfActiveLink}
      >
        Projects
      </NavLink>
      <NavLink
        to="/blogs"
        className="link nav-items pointer"
        style={getStyleOfActiveLink}
      >
        Blogs
      </NavLink>
    </div>
  );
};
