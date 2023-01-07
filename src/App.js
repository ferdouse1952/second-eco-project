import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shop from "./components/Shop/Shop";
import useProducts from "./hooks/useProducts";

function App() {
  const [flashProduct, setFlashProduct] = useProducts();

  const [cartItem, setCartItem] = useState([]);
  const addToCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const handleRemoveProduct = (product) => {
    const rest = cartItem.filter((pd) => pd.id !== product.id);
    setCartItem(rest);
  };
  return (
    <div>
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCard={addToCard} flashProduct={flashProduct} />}
        />
        <Route
          path="/shop"
          element={<Shop addToCard={addToCard} flashProduct={flashProduct} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCard={addToCard}
              decreaseQty={decreaseQty}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route path="/flashDealCard/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
