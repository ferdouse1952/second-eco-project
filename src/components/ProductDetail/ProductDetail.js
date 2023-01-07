import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  return (
    <>
      <div className="productDetail">
        {/* <h1>This is detail of Product: {productId}</h1> */}
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <div className="productDetailImg">
                <img src={productDetails.image} alt="" />
              </div>
            </div>
            <div className="col-8">
              <h3>Product Name: {productDetails.title}</h3>
              <p>Product detail: {productDetails.description}</p>
              <p>Category: {productDetails.category}</p>
              <p>Ratting: {productDetails.rating?.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
