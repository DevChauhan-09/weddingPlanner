import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiButterfly } from "react-icons/gi";

export default function Navbar() {
  return (
    <header>
      {/* Top Mini Navbar */}
      <div className="top-bar">
        <div className="top-left">
          <input type="text" placeholder="Search City..." />
        </div>
        <div className="top-right">
          <nav className="nav-links">
         <NavLink to="/login">Login</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
        </nav>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo" >
          <GiButterfly />
          <span>WeddingBliss</span>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/e-invites">E-Invites</NavLink>
          <NavLink to="/vendors">Vendors</NavLink>
          <NavLink to="/venue">Venue</NavLink>
          <NavLink to="/real-wedding">Real Weddings</NavLink>
          <NavLink to="/photo">Photo Gallery</NavLink>
        </nav>
      </div>
    </header>
  );
}
