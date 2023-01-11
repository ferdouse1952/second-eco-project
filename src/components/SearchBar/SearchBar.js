import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div className="input-box">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search here..." />
        <button className="button">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
