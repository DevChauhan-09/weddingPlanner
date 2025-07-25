import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      {/* Fullscreen Hero with Search */}
      <div className="hero-fullscreen">
        <img
          src="/images/wed1.webp"
          alt="Wedding Banner"
          className="fullscreen-img"
        />
        <div className="search-overlay">
          <h1>Plan Your Dream Wedding</h1>
          <div className="search-bar">
            <select className="dropdown">
              <option disabled selected>Select a Service</option>
              <option>Venues</option>
              <option>Photographers</option>
              <option>Planning & Decor</option>
              <option>Mehndi</option>
              <option>Music & Dance</option>
              <option>Food</option>
              <option>Groom Wear</option>
              <option>Bridal Wear</option>
            </select>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* Popular Venue Searches */}
      <section className="popular-section">
        <h2>Popular Venue Searches</h2>
        <div className="popular-grid">
          <Link to="/venue" className="popular-card">
            <img src="/images/wed2.jpg" alt="4 Star Wedding" />
            <div className="popular-title">4 Star & Above Wedding</div>
          </Link>
          <Link to="/venue" className="popular-card">
            <img src="/images/wed3.jpg" alt="Banquet Halls" />
            <div className="popular-title">Banquet Halls</div>
          </Link>
          <Link to="/venue" className="popular-card">
            <img src="/images/wed4.jpg" alt="Marriage Garden" />
            <div className="popular-title">Marriage Gardens</div>
          </Link>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="popular-section">
        <h2>Popular Searches</h2>
        <div className="popular-grid scrollable">
          {[
            { name: "Photographers", img: "/images/photographers.jpg", path: "/photographers" },
            { name: "Bridal Makeup", img: "/images/bridalmakeup.jpg", path: "/bridalmakeup" },
            { name: "Bridal Wear", img: "/images/bridalwear.jpg", path: "/bridalwear" },
            { name: "Groom Wear", img: "/images/groomwear.jpg", path: "/groomwear" },
            { name: "Decorators", img: "/images/decorators.jpg", path: "/decorators" },
            { name: "Catering", img: "/images/catering.jpg", path: "/catering" },
            { name: "Invitation", img: "/images/invitation.jpg", path: "/invitation" },
            { name: "Mehendi", img: "/images/mehendi.jpg", path: "/mehendi" }
          ].map((item, index) => (
            <Link to={item.path} className="popular-card" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="popular-title">{item.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Wedding Categories */}
      <section className="popular-section">
        <h2>Wedding Categories</h2>
        <div className="popular-grid">
          {[
            { name: "Venues", path: "/venue" },
            { name: "Makeup", path: "/makeup" },
            { name: "Photographers", path: "/photographers" },
            { name: "Virtual Planning", path: "/virtual" },
            { name: "Mehndi", path: "/mehendi" },
            { name: "Planning & Decor", path: "/decorators" }
          ].map((cat, index) => (
            <Link to={cat.path} className="category-card" key={index}>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
