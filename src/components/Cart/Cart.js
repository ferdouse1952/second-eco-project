import React from "react";
import "./Cart.css";

const Cart = ({ cartItem, addToCard, decreaseQty, handleRemoveProduct }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items pt-5">
        <div className="container">
          <div className="row cart-row pt-4">
            <div className="cart-details col-8">
              {cartItem.length === 0 && (
                <h1 className="no-items product">No Items are add in Cart</h1>
              )}
              {cartItem.map((item) => {
                const productQty = item.price * item.qty;
                return (
                  <div className="cart-list">
                    <div class="card mb-3 border-0">
                      <div className="d-flex">
                        <div className="cart-list-img">
                          <img
                            src={item.image}
                            class="card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.category}</h5>
                          <p>
                            {item.price}.00 * {item.qty}
                            <span className="ps-4">${productQty}.00</span>
                          </p>
                        </div>
                        <div className="cart-items-function cart-items-btn pe-4">
                          <div className="removeCart pt-3">
                            <button
                              className="border-0 bg-white"
                              onClick={() => handleRemoveProduct(item)}
                            >
                              <i className="fa-solid fa-xmark rounded"></i>
                            </button>
                          </div>
                          <div className="cartControl d-flex pt-3">
                            <div className="incCart pe-4">
                              <button
                                onClick={() => addToCard(item)}
                                className="border-0 bg-white"
                              >
                                <i className="fa fa-plus rounded"></i>
                              </button>
                            </div>
                            <div className="desCart">
                              <button
                                onClick={() => decreaseQty(item)}
                                className="border-0 bg-white pb-3"
                              >
                                <i className="fa fa-minus rounded"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-total col-4">
              <h2>Cart Summary</h2>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total Price :</p>
                <p>${totalPrice}.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
