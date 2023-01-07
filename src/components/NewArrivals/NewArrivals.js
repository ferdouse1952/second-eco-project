import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NewArrivalsCard from "../NewArrivalsCard/NewArrivalsCard";
import './NewArrivals.css';

const NewArrivals = () => {
  const [newArrivalsProduct, setNewArrivalsProduct] = useState([]);
  useEffect(() => {
    fetch("newArrivals.json")
      .then((res) => res.json())
      .then((data) => setNewArrivalsProduct(data));
  }, []);

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <section>
        <div className="newArrivals d-flex pt-5">
          <img
            src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
            alt=""
          />
          <h3 className="pt-3 fw-semibold">New Arrivals</h3>
        </div>
        <Slider {...settings}>
          {newArrivalsProduct.map((product) => (
            <NewArrivalsCard
              key={product.id}
              product={product}
            ></NewArrivalsCard>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default NewArrivals;
