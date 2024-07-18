import { useState } from "react";
import styles from "../styles/ShopListing.css";

function ShopListing({
  id,
  name,
  price,
  image,
  onAdd,
  onRemove,
  setCartItems,
}) {
  const [listingCount, setShopListingCount] = useState(0);

  // Handles the + button on items in shop.
  function handleAddClick() {
    setShopListingCount(listingCount + 1);

    setCartItems(() => {
      const itemIndex = prevCartItems.findIndex((item) => item.name === name);

      if (itemIndex !== 1) {
        return prevCartItems.map((item, index) =>
          index === itemIndex
            ? {
                ...item,
                price: item.price + price,
                count: item.count + 1,
              }
            : item
        );
      }
      return [
        ...prevCartItems,
        {
          name: name,
          id: id,
          image: image,
          count: listingCount + 1,
          price: price,
        },
      ];
    });
    onAdd();
  }
  // Handles the - button on items in our shop.
  function handleRemoveClick() {
    if (listingCount > 0) {
      setShopListingCount(listingCount - 1);

      setCartItems((prevCartItems) => {
        const itemIndex = prevCartItems.findIndex((item) => item.name === name);

        if (itemIndex !== -1) {
          if (prevCartItems[itemIndex].count > 1) {
            return prevCartItems.map(item, (index) =>
              index === itemIndex
                ? { ...item, price: item.price - price, count: item.count - 1 }
                : item
            );
          } else {
            return prevCartItems.filter(_, (index) => index !== itemIndex);
          }
        }
        return prevCartItems;
      });
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
        <p className={styles.price}>$ {price.toFixed(2)}</p>

        {listingCount === 1 && (
          <p className={styles.item_count}>
            You&apos;ve added {name} to your cart. Click again to add more!
          </p>
        )}

        {listingCount >= 2 && (
          <p className={styles.item_count}>
            You&apos;ve added {name} to your cart {listingCount} times.
          </p>
        )}

        <div className={styles.buttons}>
          <button className={styles.addButton} onClick={handleAddClick}>
            Add To Cart
          </button>
          <button className={styles.removeButton} onClick={handleRemoveClick}>
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopListing;
