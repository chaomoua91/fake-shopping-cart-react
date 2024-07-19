import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import getProducts from "../data";
import ShopListing from "./ShopListing";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { handleShopAddClick, handleShopRemoveClick, setCartItems } =
    useOutletContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div id={styles.main}>
      {products.map((listing) => (
        <ShopListing
          key={listing.id}
          id={listing.id}
          name={listing.title}
          price={listing.price}
          image={listing.image}
          onAdd={handleShopAddClick}
          onRemove={handleShopRemoveClick}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default Shop;
