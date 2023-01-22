import React from "react";
import "./NewArrivalsCard.css";

const NewArrivalsCard = (props) => {
  const { cover, name, price } = props.product;
  return (
    <>
      <div className="col container pt-4">
        <div className="card newArrivalsCard">
          <div className="newArrivalImg mx-auto pt-2">
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

export default NewArrivalsCard;
