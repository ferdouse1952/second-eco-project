import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Discount from "../Discount/Discount";
import FlashDealCard from "../FlashDealCard/FlashDealCard";
import NewArrivals from "../NewArrivals/NewArrivals";
import TopCategories from "../TopCategories/TopCategories";
import "./FlashDeals.css";

const FlashDeals = ({ addToCard, flashProduct }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next border-0">
          <i className="fa fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev border-0">
          <i className="fa fa-long-arrow-alt-left"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <>
      <section className="bg-light pt-5">
        <div className="container">
          <div className="flash d-flex pt-5 pb-4">
            <i className="fa fa-bolt fs-5 pt-2 pe-2"></i>
            <h3 className="fw-semibold">Flash Deals</h3>
          </div>

          <Slider {...settings}>
            {flashProduct.map((product) => (
              <FlashDealCard
                key={product.id}
                product={product}
                addToCard={addToCard}
              ></FlashDealCard>
            ))}
          </Slider>
          <TopCategories />
          <NewArrivals />
          <Discount />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
