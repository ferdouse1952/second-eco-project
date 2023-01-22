import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row row-div row-cols-md-4 row-cols-2">
            <div className="col-lg-3 col-md-3">
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link href="">Pages</Link>
                </li>
                <li>
                  <Link href="">Our Team</Link>
                </li>
                <li>
                  <Link href="">Feuchers</Link>
                </li>
                <li>
                  <Link href="">Pricing</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Ressources
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <Link>Monitoring Grader </Link>
                  </li>
                  <li>
                    <Link>Video Tutorial</Link>
                  </li>
                  <li>
                    <Link>Term &amp; Service</Link>
                  </li>
                  <li>
                    <Link>Zeeko API</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Help
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <Link>Sign Up </Link>
                  </li>
                  <li>
                    <Link>Login</Link>
                  </li>
                  <li>
                    <Link>Terms of Services</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p className="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p className="contact-info">+01 123-456-7890</p>
                <div className="mt-5">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab facebook footer-social-icon fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab twitter footer-social-icon fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab google footer-social-icon fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">
            2019 © Anup, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
