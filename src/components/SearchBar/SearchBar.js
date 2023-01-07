import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div class="input-box">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search here..." />
        <button class="button">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
