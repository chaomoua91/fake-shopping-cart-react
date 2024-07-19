import styles from "../styles/CartListing.module.css";

function cartListing({
  id,
  name,
  price,
  image,
  count,
  onAdd,
  onRemove,
  setCartItems,
}) {
  function handleCartAddClick() {
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

    onAdd();
  }

  function handleCartRemoveClick() {
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
    });

    onRemove();
  }

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img src={image} className={styles.image} />
      </div>

      <div className={styles.right}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>Price: $ {price.toFixed(2)}</p>
        <p>Item count: {count}</p>

        <div className={styles.buttons}>
          <button className={styles.add_button} onClick={handleCartAddClick}>
            +
          </button>
          <button
            className={styles.remove_button}
            onClick={handleCartRemoveClick}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default cartListing;
