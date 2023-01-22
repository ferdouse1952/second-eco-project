import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Discount.css";
import DiscountCard from "../DiscountCard/DiscountCard";

const Discount = () => {
  const [discountProduct, setDiscountProduct] = useState([]);
  useEffect(() => {
    fetch("discount.json")
      .then((res) => res.json())
      .then((data) => setDiscountProduct(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
      <section>
        <div className="d-flex pt-5 bigDiscount">
          <img
            className="pb-3"
            src="https://img.icons8.com/windows/32/fa314a/gift.png"
            alt=""
          />
          <h3 className="fw-semibold">Big Discounts</h3>
        </div>
        <Slider {...settings}>
          {discountProduct.map((product) => (
            <DiscountCard key={product.id} product={product}></DiscountCard>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Discount;
