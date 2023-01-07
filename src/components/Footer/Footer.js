import React from "react";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="row text-white pt-5">
          <div className="col-3">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </small>
          </div>
          <div className="col-3">
            <h6 className="ps-4">About Us</h6>
            <ul className="ps-4">
              <li>
                <small>Careers</small>
              </li>
              <li>
                <small>Our Stores</small>
              </li>
              <li>
                <small>Our Cares</small>
              </li>
              <li>
                <small>Terms & Conditions</small>
              </li>
              <li>
                <small>Privacy Policy</small>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6>Customer Care</h6>
            <ul className="ps-1">
              <li>
                <small>Help Center</small>
              </li>
              <li>
                <small>How to Buy</small>
              </li>
              <li>
                <small>Track Your Order</small>
              </li>
              <li>
                <small>Corporate & Bulk Purchasing</small>
              </li>
              <li>
                <small>Returns & Refunds</small>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6>Contact Us</h6>
            <ul className="ps-1">
              <li>
                <small>
                  70 Washington Square South, New York, NY 10012, United States
                </small>
              </li>
              <li>
                <small>Email: uilib.help@gmail.com</small>
              </li>
              <li>
                <small>Phone: +1 1123 456 780</small>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
