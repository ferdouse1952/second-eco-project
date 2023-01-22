import React from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
      <section className="head  text-white">
        <div className="d-flex justify-content-between">
          <div className="contact-row">
            <i className="text-white fa fa-phone"></i>
            <label>+88012 3457 7894</label>

            <Link to="/loginPage"></Link>
          </div>
          <div className="social-row d-flex align-items-center">
            <i className="text-white fa-brands fa-facebook  me-3 rounded-circle border"></i>
            <i className="text-white fa-brands fa-instagram  me-3 rounded-circle border"></i>
            <i className="text-white fa-brands fa-linkedin rounded-circle border"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
