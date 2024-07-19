import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import getProducts from "../data";
import ShopListing from "./ShopListing";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { handleShopAddClick, handleShopRemoveClick, setCartItems } =
    useOutletContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

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
