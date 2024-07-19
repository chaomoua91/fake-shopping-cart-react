import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleShopAddClick() {
    setCartCount(cartCount + 1);
  }

  function handleShopRemoveClick() {
    if (cartCount - 1 >= 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <>
      <Navbar />
      <Outlet
        context={{
          handleShopAddClick,
          handleShopRemoveClick,
          cartCount,
          setCartItems,
          cartItems,
        }}
      />
    </>
  );
}

export default App;
