import React from "react";
import './Benifits.css';

const Benifits = () => {
  const benifitsData = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className=" container pt-5 pb-5 d-flex">
        {benifitsData.map((val, index) => {
          return (
            <>
              <div class="col pb-5 container" key={index}>
                <div class="card border-0 benifits pt-3">
                  <div className="iconImg text-center mx-auto pt-2">
                    <i className="fs-3">{val.cover}</i>
                  </div>

                  <div class="card-body">
                    <div class="text-dark text-center">
                      <h3 className="fs-4">{val.title}</h3>
                      <p>{val.decs}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Benifits;
