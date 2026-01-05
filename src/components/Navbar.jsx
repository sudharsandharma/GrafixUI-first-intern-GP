import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setSearchTerm } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate("/menu");
  };

  return (
    <nav className="z-navbar">
      {/* Logo */}
      <div className="z-logo">
        <Link to="/">GrafixUI</Link>
      </div>

      {/* Search */}
      <div className="z-search">
        <FaSearch className="z-search-icon" />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          onChange={handleSearch}
        />
      </div>

      {/* Links */}
      <div className={`z-links ${open ? "open" : ""}`}>
        <Link to="/cart" className="cart-link" onClick={() => setOpen(false)}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>

        <Link to="/login" onClick={() => setOpen(false)}>Log in</Link>

        <Link
          to="/signup"
          className="signup"
          onClick={() => setOpen(false)}
        >
          Sign up
        </Link>
      </div>

      {/* Hamburger */}
      <div className="z-hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
