import React from "react";
import OtherAccesories from "../OtherAccesories/OtherAccesories";

const Shop = ({ addToCard, flashProduct }) => {
  return (
    <>
      <div className="container">
        <OtherAccesories flashProduct={flashProduct} addToCard={addToCard} />
      </div>
    </>
  );
};

export default Shop;
