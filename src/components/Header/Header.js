import React from "react";
import Navbar from "../Navbar/Navbar";
import TopHeader from "../TopHeader/TopHeader";

const Header = ({ cartItem, flashProduct }) => {
  return (
    <>
      <TopHeader />
      <Navbar cartItem={cartItem} flashProduct={flashProduct} />
    </>
  );
};

export default Header;
