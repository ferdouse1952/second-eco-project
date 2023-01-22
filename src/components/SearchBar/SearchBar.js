import React, { useState } from "react";
import SearchDetails from "../SearchDetails/SearchDetails";
import "./SearchBar.css";

const SearchBar = ({ flashProduct }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = flashProduct.filter((value) => {
      return value.category.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="searchSection">
        <div className="search">
          <input
            type="text"
            placeholder="Search here..."
            value={wordEntered}
            onChange={handleFilter}
          />

          {filteredData.length === 0 ? (
            <i className="fa fa-search fs-5"></i>
          ) : (
            <i className="fa fa-close closeBtn" onClick={clearInput}></i>
          )}

          {filteredData.length !== 0 && (
            <div className="dataResult mt-2" onClick={clearInput}>
              {filteredData.map((product) => (
                <SearchDetails
                  product={product}
                  key={product.id}
                ></SearchDetails>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
