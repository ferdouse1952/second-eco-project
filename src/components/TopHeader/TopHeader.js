import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
      <section className="head  text-white">
        <div className="d-flex justify-content-between">
          <div className="contact-row">
            <i className="text-white fa fa-phone"></i>
            <label>+88012 3457 7894</label>
            <i className="text-white fa fa-envelope ps-4"></i>
            <label className="ps-2">example@gmail.com</label>
          </div>
          <div className="social-row d-flex">
            <i className="text-white fa-brands fa-github"></i>
            <label className="ps-2">GitHub</label>
            <i className="text-white fa-brands fa-facebook ps-4"></i>
            <label className="ps-2">Facebook</label>
            <i className="text-white fa-brands fa-instagram ps-4"></i>
            <label className="ps-2">Instagram</label>
            <i className="text-white fa-brands fa-linkedin ps-4"></i>
            <label className="ps-2">Linkedin</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
