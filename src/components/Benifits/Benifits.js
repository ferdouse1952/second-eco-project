import React from "react";
import BenifitsCard from "../BenifitsCard/BenifitsCard";
import "./Benifits.css";

const Benifits = () => {
  const benifitsData = [
    {
      id: 1,
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 2,
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 3,
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 4,
      cover: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="container">
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
          {benifitsData.map((data) => (
            <BenifitsCard key={data.id} data={data}></BenifitsCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Benifits;
