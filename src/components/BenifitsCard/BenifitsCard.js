import React from "react";

const BenifitsCard = ({ data }) => {
  return (
    <>
      <div class="col col-12 col-sm-6 pb-5 pt-5">
        <div class="card h-100 border-0 benifits pt-3">
          <div className="iconImg text-center mx-auto pt-2">
            <i className="fs-3">{data.cover}</i>
          </div>
          <div class="card-body">
            <div className="text-dark text-center">
              <h3 className="fs-4">{data.title}</h3>
              <p>{data.decs}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsCard;
