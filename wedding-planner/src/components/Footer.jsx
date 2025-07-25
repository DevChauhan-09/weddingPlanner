import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Wedding Bliss</p>
      <div className="footer-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </footer>
  );
}
