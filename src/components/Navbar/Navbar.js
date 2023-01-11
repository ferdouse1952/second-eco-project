import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Navbar = ({ cartItem }) => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
            <Link to="/loginPage">
              {user.email ? (
                <button className="border-0 bg-white" onClick={handleSignOut}>
                  SignOut
                </button>
              ) : (
                <button className="border-0 bg-white" onClick={handleSignIn}>
                  <i className="fa fa-user icon-circle navIcon pt-3"></i>
                </button>
              )}
            </Link>
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
