import React from "react";
import { useNavigate } from "react-router";
import "./FlashDealCard.css";

const FlashDealCard = ({ addToCard, product }) => {
  const navigate = useNavigate();
  const showProductDetails = () => {
    const path = `/flashDealCard/${product.id}`;
    navigate(path);
  };
  return (
    <>
      <div className="flash">
        <div className="col container">
          <div className="card pt-3">
            <div className="d-flex justify-content-between">
              <div className="ps-2 pt-1">
                <span className="discount text-white rounded-pill">
                  50% Off
                </span>
              </div>
              <div className="outlook">
                <div className="pe-2" onClick={showProductDetails}>
                  <span className="fs-6 text-white rounded-pill">
                    Outlook <i className="fa-solid fa-eye text-white"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="coverImg mx-auto">
              <img src={product.image} alt="" />
            </div>

            <div className="card-body">
              <div className="text-dark">
                <h6>{product.category}</h6>
              </div>
              <div className="rate pb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="text-dark fw-bold">${product.price}.00</h6>

                <button
                  className="plus-btn border-0 bg-white"
                  onClick={() => addToCard(product)}
                >
                  <i className="fa fa-plus rounded"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashDealCard;
