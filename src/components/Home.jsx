import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import logo from "../assets/etsybanner01.png";
import model from "../assets/model_pic.jpg";
import leftDisplay from "../assets/left_pic.jpg";
import rightDisplay from "../assets/right_pic.jpg";

function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page when navigating
  };

  return (
    <div id={styles.main}>
      <img id={styles.top} src={model} alt="model 1" />

      <h1>Explore the world</h1>
      <p>Welcome to freedom.</p>

      <div id={styles.mid}>
        <img className={styles.photo} src={rightDisplay} alt="model 2" />
        <img className={styles.photo} src={leftDisplay} alt="model 3" />
      </div>

      <div id={styles.bottom}>
        <button id={styles.buy_now} onClick={() => handleClick("/shop")}>
          Visit Our Shop
        </button>
        <img id={styles.logo} src={logo} alt="store logo" />
      </div>
    </div>
  );
}

export default Home;
