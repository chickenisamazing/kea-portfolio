"use client";
import { useState } from "react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrollLocation, getScrollLocation] =
    useState<string>("about-me-title");

  function scrollToSection(props: string) {
    getScrollLocation(props);
    document.getElementById(props)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <button
          type="button"
          onClick={() => scrollToSection("about-me-title")}
          className={`${
            scrollLocation === "about-me-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
        >
          About Me
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("skills-title")}
          className={` ${
            scrollLocation === "skills-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
        >
          Skills
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("projects-title")}
          className={`${
            scrollLocation === "projects-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
