import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import Slider from "react-slick/lib/slider";
import Sdata from "./Sdata";

const Hero = () => {
  const data = [
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1785/1785255.png",
      cateName: "Women",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/6829/6829639.png",
      cateName: "Men",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/4392/4392444.png",
      cateName: "Children",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/2806/2806234.png",
      cateName: "Tops",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/957/957077.png",
      cateName: "Bottoms",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/9027/9027551.png",
      cateName: "Shoes",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/4075/4075666.png",
      cateName: "Bags",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/2806/2806180.png",
      cateName: "Accessories",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "0" }}>{dots}</ul>;
    // },
  };
  return (
    <>
      <section className="container hero-section">
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
                    <p className="ps-4 fw-semibold">
                      {value.cateName}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-9 ps-5 slide">
            <Slider {...settings}>
              {Sdata.map((value, index) => {
                return (
                  <div className="d-flex" key={index}>
                    <div className="left">
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className="border-0 rounded text-white">Visit Collections</button>
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
      </section>
    </>
  );
};

export default Hero;
