import { useEffect, useState } from "react";

const useProducts = () => {
  const [flashProduct, setFlashProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFlashProduct(data));
  }, []);
  return [flashProduct, setFlashProduct];
};
export default useProducts;