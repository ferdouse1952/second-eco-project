import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ cartItem, flashProduct }) => {
  return (
    <>
      <div className="navBg sticky-top">
        <div className="container-lg">
          <nav className="navbar navber navbar-expand-lg bg-body-tertiary pt-1 pb-5">
            <div className="container-fluid">
              <Link className="navbar-brand img-logo" href="#">
                LOGO
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse togglenavbg"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navMenu">
                  <Link
                    to="/"
                    className="nav-link ps-lg-4 "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                  <Link to="/shop" className="nav-link ps-lg-4" href="#">
                    Shop
                  </Link>
                  <Link className="nav-link ps-lg-4" href="#">
                    Contact
                  </Link>
                  <Link
                    to="/loginPage"
                    className="nav-link ps-lg-4 d-lg-none d-block"
                    href="#"
                  >
                    Login/Registration
                  </Link>
                </ul>

                <div className="d-flex searchCart">
                  <SearchBar flashProduct={flashProduct} />
                  <Link className="cart d-lg-none" to="/cart">
                    <i className="fa fa-shopping-bag text-white icon-circle"></i>
                    <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                  </Link>
                </div>

                <div className="fs-4 d-none d-lg-block">
                  <Link to="/loginPage" className="loginIcon pe-4 ps-4">
                    <button className="border-0 bg-transparent">
                      <i className="fa-regular fa-user "></i>
                    </button>
                  </Link>
                  <Link className="cart" to="/cart">
                    <i className="fa fa-shopping-bag icon-circle"></i>
                    <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* <div>
        <div className="d-flex align-items-center justify-content-center pt-4">
          <Link className="navbar-brand navlogo" href="#">
            <div className="img-logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <SearchBar flashProduct={flashProduct} />
          <div className="fs-4 pb-1 ps-5">
            <Link to="/loginPage">
              <button className="border-0 bg-white pe-5">
                <i className="fa-regular fa-user"></i>
              </button>
            </Link>
            <Link className="cart" to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
            </Link>
          </div>
        </div>
        <div className="bottomline"></div>

        <nav className="navbar navber navbar-expand-lg">
          <div className="container-fluid justify-content-around">
            <div className="menu">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon toggleIcon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav navMenu">
                  <Link
                    to="/"
                    className="nav-link active pe-5"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                  <Link to="/shop" className="nav-link pe-5" href="#">
                    Shop
                  </Link>
                  <Link className="nav-link pe-5" href="#">
                    Contact
                  </Link>
                  <Link className="nav-link pe-5" href="#">
                    User Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Navbar;
