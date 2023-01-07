import React from "react";
import "./TopCategoriesCard.css";

const TopCategoriesCard = (props) => {
  const { cover, cover1, cover2, name, desc } = props.product;
  return (
    <>
      <div className="topCategories">
        <div class="col container">
          <div class="card">
            <div class="card-body">
              <div class="text-white fs-6 d-flex justify-content-between">
                <small>{name}</small>
                <small>{desc}</small>
              </div>
            </div>
            <div className="topCatImg d-flex">
              <img src={cover} alt="" />
              <img src={cover1} alt="" />
              <img src={cover2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategoriesCard;
