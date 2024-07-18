import { useState } from "react";
import { Outlet } from "react-router-dom";

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

  return <></>;
}

export default App;
