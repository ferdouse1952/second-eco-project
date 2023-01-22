import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstSlideImg from "../../Images/ladies.png";
import secondSlideImg from "../../Images/men.png";
import thirdSlideImg from "../../Images/watch.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="container">
        <div className="sliderSection pt-5">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner carouselItem">
              <div class="carousel-item firstSlide active">
                <div className="firstline"></div>
                <div className="secondline"></div>
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="left">
                      <h1>Finding Your Perfect Dress</h1>
                      <p className="text-white pb-3 pt-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam placeat eaque nihil modi quam at debitis
                        asperiores est ipsum? Inventore?
                      </p>
                      <div className="button">
                        <Link to="/shop">
                          <button className="visitButton border-0 rounded text-white">
                            Visit Collections
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="slideImg">
                      <img
                        src={firstSlideImg}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="thirdline"></div>
                <div className="fourthline"></div>
              </div>
              <div class="carousel-item secondSlider">
                <div className="firstline"></div>
                <div className="secondline"></div>
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="left">
                      <h1>Finding Your Perfect Dress</h1>
                      <p className="text-white pb-3 pt-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam placeat eaque nihil modi quam at debitis
                        asperiores est ipsum? Inventore?
                      </p>
                      <Link to="/shop">
                        <button className="visitButton border-0 rounded text-white">
                          Visit Collections
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="slideImg">
                      <img
                        src={secondSlideImg}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="thirdline"></div>
                <div className="fourthline"></div>
              </div>
              <div class="carousel-item thirdSlider">
                <div className="firstline"></div>
                <div className="secondline"></div>
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="left">
                      <h1>Finding Your Perfect Dress</h1>
                      <p className="text-white pb-3 pt-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam placeat eaque nihil modi quam at debitis
                        asperiores est ipsum? Inventore?
                      </p>
                      <Link to="/shop">
                        <button className="visitButton border-0 rounded text-white">
                          Visit Collections
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="slideImg">
                      <img
                        src={thirdSlideImg}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="thirdline"></div>
                <div className="fourthline"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container hero-section">
        <div className="row cat-slide-row align-items-center">
          <div className="col-3 rounded-bottom catecol p-0">
            <div className="categorie rounded-top d-flex text-white p-2">
              <i className="text-white fa-solid fa-bars pt-1 ps-2"></i>
              <h5 className="ps-2">Shop By Categories </h5>
            </div>
            <div className="category-list">
              {data.map((value, index) => {
                return (
                  <Link className="box d-flex" key={index}>
                    <img src={value.cateImg} alt="" />
                    <p className="ps-4 fw-semibold">{value.cateName}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-9 ps-5 slide">
            <Slider {...settings}>
              {Sdata.map((value, index) => {
                return (
                  <div className="d-flex slideDetails" key={index}>
                    <div className="left">
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <Link to="/shop">
                        <button className="border-0 rounded text-white">
                          Visit Collections
                        </button>
                      </Link>
                    </div>
                    <div className="slideImg">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
