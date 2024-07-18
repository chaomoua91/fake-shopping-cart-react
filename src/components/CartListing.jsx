import React from "react";
import styles from "../styles/CartListing.module.css";

function CartListing(
  id,
  name,
  price,
  image,
  count,
  onAdd,
  onRemove,
  setCartItems
) {
  function handleCartAddClick(id, onAdd) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              price: item.price + item.price / item.count,
            }
          : item
      )
    );

    if (onAdd) {
      onAdd();
    }
  }

  function handleCartRemoveClick(name, id, onRemove) {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        if (prevItems[itemIndex].count > 1) {
          return prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  price: item.price - item.price / item.count,
                  count: item.count - 1,
                }
              : item
          );
        } else {
          return prevItems.filter((_, index) => index !== itemIndex);
        }
      }

      // Return prevItems if itemIndex is -1 (item not found)
      return prevItems;
    });

    if (onRemove) {
      onRemove();
    }
  }
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img src={image} className={styles.image} alt={name} />
      </div>

      <div className={styles.right}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>Price: $ {price.toFixed(2)}</p>
        <p>Item count: {count}</p>

        <div className={styles.buttons}>
          <button className={styles.add_button} onClick={onAdd}>
            +
          </button>
          <button className={styles.remove_button} onClick={onRemove}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartListing;
