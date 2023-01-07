import React from "react";
import "./OtherAccesories.css";
import OtherAccesoriesCard from "../OtherAccesoriesCard/OtherAccesoriesCard";

const OtherAccesories = ({ addToCard, flashProduct }) => {
  return (
    <>
      <section className="pt-5 pb-5 accesories">
        <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
          {flashProduct.map((product) => (
            <OtherAccesoriesCard
              key={product.id}
              product={product}
              addToCard={addToCard}
            ></OtherAccesoriesCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default OtherAccesories;
