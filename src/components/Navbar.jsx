import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/etsybanner01.png";
import hamburgerIcon from "../assets/hamburger-menu.svg";
import styles from "../styles/Navbar.module.css";

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!menuOpen ? (
        <div id={styles.navbar}>
          <img className={styles.logo} src={logo} alt="store logo" />

          <nav className={styles.items}>
            <ul>
              <li className={styles.item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.item}>
                <Link to="/shop">Shop</Link>
              </li>
              <li className={styles.item}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.items}>
            <ul>
              <li className={styles.cart}>
                <Link to="/cart">Cart: {cart}</Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger menu button for mobile devices */}
          <div id={styles.hamburger_container}>
            <img
              src={hamburgerIcon}
              id={styles.hamburger}
              alt="hamburger menu icon"
              onClick={toggleMenu}
            />
            {cart >= 1 && (
              <p id={styles.cart_count} onClick={toggleMenu}>
                {cart}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div id={styles.hamburger_items}>
          {/* Hamburger menu items for mobile devices */}
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/shop" onClick={toggleMenu}>
            Shop
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/cart" id={styles.hamburger_cart} onClick={toggleMenu}>
            Cart: {cart}
          </Link>
          <a onClick={toggleMenu}>Close</a>
        </div>
      )}
    </>
  );
}

export default Navbar;
