"use client";

import styles from "./Navbar.module.css";

export default function Navbar() {
  function scrollToSection(props: string) {
    document.getElementById(props)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <button
          type="button"
          onClick={() => scrollToSection("about-me-title")}
          className={styles["about-me"]}
        >
          About Me
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("skills-title")}
          className={styles.skills}
        >
          Skills
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("projects-title")}
          className={styles.projects}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
