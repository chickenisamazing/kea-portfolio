import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <a className={styles["about-me"]}>About Me</a>
        <a className={styles.skills}>Skills</a>
        <a className={styles.projects}>Projects</a>
      </div>
    </nav>
  );
}
