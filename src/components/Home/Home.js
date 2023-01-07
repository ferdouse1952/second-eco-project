import React from "react";
import Banner from "../Banner/Banner";
import Benifits from "../Benifits/Benifits";
import FlashDeals from "../FlashDeals/FlashDeals";
import Hero from "../Hero/Hero";

const Home = ({ addToCard, flashProduct, OtherAccesoriesProduct }) => {
  return (
    <>
      <Hero />
      <FlashDeals addToCard={addToCard} flashProduct={flashProduct} />
      <Banner />
      <Benifits />
    </>
  );
};

export default Home;
