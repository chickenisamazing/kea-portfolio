"use client";
import { useState, useRef, useLayoutEffect } from "react";

import styles from "./Navbar.module.css";

const SECTION_ID_ARRAY = ["about-me-title", "skills-title", "projects-title"];
// const SCROLL_ANIMATION_DURATION = 50;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about-me-title");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const [doNotChange, setDoNotChange] = useState<boolean>(false);

  useLayoutEffect(() => {
    SECTION_ID_ARRAY.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 이걸 추가하면 aboutme -> projects로 갈 때 skills 버튼 스타일이 순간 바뀌는건 사라지나 스크롤 위치를 인식해서 버튼 스타일 바뀌는건 안됨 -> 수정해야함
            if (doNotChange === false) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    SECTION_ID_ARRAY.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setDoNotChange(true);

    let target = sectionRefs.current[id];

    if (!target) {
      target = document.getElementById(id);
      sectionRefs.current[id] = target;
    }

    target?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setTimeout(() => {
      setDoNotChange(false);
    }, 700);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <button
          key="about-me-title"
          onClick={() => scrollTo("about-me-title")}
          className={`${styles.btn} ${
            activeSection === "about-me-title"
              ? styles["btn-selected"]
              : styles["btn-unselected"]
          }`}
        >
          About Me
        </button>
        <button
          key="skills-title"
          onClick={() => scrollTo("skills-title")}
          className={`${styles.btn} ${
            activeSection === "skills-title"
              ? styles["btn-selected"]
              : styles["btn-unselected"]
          }`}
        >
          Skills
        </button>
        <button
          key="projects-title"
          onClick={() => scrollTo("projects-title")}
          className={`${styles.btn} ${
            activeSection === "projects-title"
              ? styles["btn-selected"]
              : styles["btn-unselected"]
          }`}
        >
          Projects
        </button>
        {/* <button onClick={() => confirm()}>확인</button> */}
      </div>
    </nav>
  );
}
