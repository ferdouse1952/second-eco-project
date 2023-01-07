import React from "react";
import Navbar from "../Navbar/Navbar";
import TopHeader from "../TopHeader/TopHeader";

const Header = ({ cartItem }) => {
  return (
    <>
      <TopHeader />
      <Navbar cartItem={cartItem} />
    </>
  );
};

export default Header;
