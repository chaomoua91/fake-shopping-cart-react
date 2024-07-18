import logo from "../assets/etsybanner01.png";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div id={styles.main}>
      <div id={styles.wall_of_text}>
        <h1>Hello!</h1>
        <p>
          You&apos;re here either because you clicked on the <i>About</i> button
          in the nav bar...
        </p>
        <p>
          This site was built with Vite + React, and for the CSS, I used CSS
          modules and flexbox. <i>Tons</i> of flexbox.
        </p>
        <p>
          There is no back-end, since this is a simple front-end project
          assignment.
        </p>
        <p>
          The models pictures were made with Midjourney, the products were
          fetched from{" "}
          <a
            href="https://fakestoreapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FakeStore API
          </a>
          , and the store logo was made by myself.
        </p>
        <br />
        <img id={styles.logo} src={logo} alt="store logo" />
      </div>
    </div>
  );
}

export default About;
