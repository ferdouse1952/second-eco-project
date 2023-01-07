import React from "react";

const DiscountCard = (props) => {
    const { cover, name, price } = props.product;
  return (
    <>
      <div class="col container pt-3 pb-5">
        <div class="card">
          <div className="newArrivalImg">
            <img src={cover} alt="" />
          </div>

          <div class="card-body">
            <div class="text-dark">
              <h6>{name}</h6>
            </div>
            <div>
              <h6 class="text-dark fw-bold">${price}.00</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
