"use client";
import { useState, useEffect, useRef } from "react";

import styles from "./Navbar.module.css";

const SECTION_ID_ARRAY = ["about-me-title", "skills-title", "projects-title"];

export default function Navbar() {
  const [scrollLocation, setScrollLocation] =
    useState<string>("about-me-title");
  const sectionTops = useRef<Record<string, number>>({});

  // 3개 섹션들의 Y값 계산 및 저장
  const calculateSectionTops = () => {
    const newTops: Record<string, number> = {};
    let changed = false;
    SECTION_ID_ARRAY.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop;
        if (sectionTops.current[id] !== offsetTop) {
          changed = true;
        }
        newTops[id] = offsetTop;
      }
    });

    if (changed || Object.keys(sectionTops.current).length === 0) {
      sectionTops.current = newTops;
      console.log("체크", sectionTops.current);
    }
  };

  useEffect(() => {
    calculateSectionTops();
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const activePoint = currentScrollY + window.innerHeight / 3;
      let activeSection = SECTION_ID_ARRAY[0];

      for (let i = SECTION_ID_ARRAY.length - 1; i >= 0; i--) {
        const id = SECTION_ID_ARRAY[i];
        const sectionTop = sectionTops.current[id];
        if (sectionTop !== undefined && activePoint >= sectionTop) {
          activeSection = id;
          break;
        }
      }
      if (scrollLocation !== activeSection) {
        setScrollLocation(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateSectionTops);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateSectionTops);
    };
  }, [scrollLocation]);

  // 내비게이션 바 버튼 클릭시 해당 섹션으로 이동
  function scrollToSection(props: string) {
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
