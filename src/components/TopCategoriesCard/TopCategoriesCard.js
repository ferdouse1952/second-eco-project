import React from "react";
import "./TopCategoriesCard.css";

const TopCategoriesCard = (props) => {
  const { cover, cover1, cover2, name, desc } = props.product;
  return (
    <>
      <div className="topCategories">
        <div className="col container">
          <div className="card">
            <div className="card-body">
              <div className="text-white fs-6 d-md-flex justify-content-between">
                <p>
                  <small>{name}</small>
                </p>
                <p>
                  <small>{desc}</small>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="topCatImg">
                  <img src={cover} alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="topCatImg">
                  <img src={cover1} alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="topCatImg">
                  <img src={cover2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategoriesCard;
