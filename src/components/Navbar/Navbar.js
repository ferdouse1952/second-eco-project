import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ cartItem }) => {
  return (
    <>
      <nav className="navbar navber navbar-expand-lg sticky-top pt-4">
        <div className="container-fluid justify-content-around">
          <Link className="navbar-brand" href="#">
            <div className="img-logo">
              <img src={logo} alt="" />
            </div>
          </Link>

          <SearchBar />

          <div className="menu fs-6">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
                <Link to="/shop" className="nav-link" href="#">
                  Shop
                </Link>
                <Link className="nav-link" href="#">
                  Contact
                </Link>
                <Link className="nav-link" href="#">
                  User Account
                </Link>
              </div>
            </div>
          </div>
          <div className="fs-5 text-center">
            <i className="fa fa-user icon-circle navIcon pt-3"></i>
            <Link className="ps-4 cart" to="/cart">
              <i className="fa fa-shopping-bag icon-circle navIcon pt-3"></i>
              <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
