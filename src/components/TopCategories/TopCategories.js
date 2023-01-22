import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TopCategoriesCard from "../TopCategoriesCard/TopCategoriesCard";
import "./TopCategories.css";

const TopCategories = () => {
  const [topCategoriesProduct, setTopCategoriesProduct] = useState([]);
  useEffect(() => {
    fetch("topCategoriesData.json")
      .then((res) => res.json())
      .then((data) => setTopCategoriesProduct(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="categories">
        <div className="d-flex pt-5 pb-4">
          <i className="fs-5 pt-2 pe-2 fa fa-border-all"></i>
          <h3 className="fw-semibold">Top Categories</h3>
        </div>
        <Slider {...settings}>
          {topCategoriesProduct.map((product) => (
            <TopCategoriesCard
              key={product.id}
              product={product}
            ></TopCategoriesCard>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default TopCategories;
