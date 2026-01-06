import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Chennai");
  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate("/menu");
  };

  return (
    <nav className="z-navbar">
      {/* LOGO */}
      <div className="z-logo">
        <Link to="/">GrafixUI</Link>
      </div>

      {/* LOCATION + SEARCH */}
      <div className="z-search-container">
        <div className="z-location">
          <FaMapMarkerAlt className="z-location-icon" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div className="z-search">
          <FaSearch className="z-search-icon" />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* LINKS */}
      <div className={`z-links ${open ? "open" : ""}`}>
        <Link to="/cart" onClick={() => setOpen(false)} className="cart-link">
          <FaShoppingCart /> Cart
        </Link>
        <Link to="/login" onClick={() => setOpen(false)}>
          Log in
        </Link>
        <Link
          to="/signup"
          className="signup"
          onClick={() => setOpen(false)}
        >
          Sign up
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className="z-hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
