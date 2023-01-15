import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchDetails = ({ product }) => {
  const navigate = useNavigate();
  const showProductDetails = () => {
    const path = `/flashDealCard/${product.id}`;
    navigate(path);
  };

  return (
    <>
      <div
        className="productDetails"
        target="_blank"
        onClick={showProductDetails}
      >
        <Link>
          <div className="searchDetails d-flex align-items-center">
            <div className="searchImg">
              <img src={product.image} alt="" />
            </div>
            <p className="text-dark ps-4 pt-4">{product.category}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SearchDetails;
