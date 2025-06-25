"use client";

import { useRouter } from "next/navigation";

import styles from "./Navbar.module.css";

export default function NavbarProject() {
  const router = useRouter();

  const NavigateAndscroll = (id: string) => {
    sessionStorage.setItem("section-id", id);
    router.push(`/`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <button
          key="about-me-title"
          onClick={() => NavigateAndscroll("about-me-title")}
          className={`${styles.btn} ${styles["btn-unselected"]}`}
        >
          About Me
        </button>
        <button
          key="skills-title"
          onClick={() => NavigateAndscroll("skills-title")}
          className={`${styles.btn} ${styles["btn-unselected"]}`}
        >
          Skills
        </button>
        <button
          key="blog-title"
          onClick={() => NavigateAndscroll("blog-title")}
          className={`${styles.btn} ${styles["btn-unselected"]}`}
        >
          Blog
        </button>
        <button
          key="projects-title"
          onClick={() => NavigateAndscroll("projects-title")}
          className={`${styles.btn} ${styles["btn-selected"]}`}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
