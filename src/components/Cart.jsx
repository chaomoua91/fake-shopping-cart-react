import { useOutletContext, Link } from "react-router-dom";
import CartListing from "./CartListing";
import styles from "../styles/Cart.module.css";

function Cart() {
  const { handleShopAddClick, handleShopRemoveClick, cartItems, setCartItems } =
    useOutletContext();

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <div id={styles.main}>
      <div id={styles.items}>
        {cartItems.map((item, index) => (
          <CartListing
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            count={item.count}
            onAdd={handleShopAddClick}
            onRemove={handleShopRemoveClick}
            setCartItems={setCartItems}
          />
        ))}

        {totalPrice === 0 && (
          <p>Your cart is empty, please buy something 😊👉👈</p>
        )}

        {totalPrice >= 1 && (
          <>
            <p id={styles.total_price}>
              Total price: <b>{totalPrice.toFixed(2)}</b>
            </p>

            <button id={styles.checkout}>
              <Link to="/about">Checkout</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
