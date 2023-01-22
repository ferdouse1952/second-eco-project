import React from "react";
import './DiscountCard.css';

const DiscountCard = (props) => {
    const { cover, name, price } = props.product;
  return (
    <>
      <div className="col container pt-3 pb-5">
        <div className="card discountCard">
          <div className="bigDiscountImg mx-auto pt-3">
            <img src={cover} alt="" />
          </div>

          <div className="card-body">
            <div className="text-dark">
              <h6>{name}</h6>
            </div>
            <div>
              <h6 className="text-dark fw-bold">${price}.00</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
