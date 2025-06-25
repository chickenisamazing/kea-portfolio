"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

const SECTION_ID_ARRAY = [
  "about-me-title",
  "skills-title",
  "blog-title",
  "projects-title",
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const doNotChangeRef = useRef(false);

  useEffect(() => {
    SECTION_ID_ARRAY.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!doNotChangeRef.current) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0.0,
      }
    );

    function setIntersectionObserver() {
      SECTION_ID_ARRAY.forEach((id) => {
        const el = sectionRefs.current[id];
        if (el) {
          observer.observe(el);
        }
      });
    }

    setIntersectionObserver();

    const mutationObserver = new MutationObserver((mutations) => {
      const hasNewSections = mutations.some((mutation) => {
        return Array.from(mutation.addedNodes).some((node) => {
          if (node.nodeType === 1) {
            const element = node as Element;
            return SECTION_ID_ARRAY.some(
              (id) => element.id === id || element.querySelector(`#${id}`)
            );
          }
          return false;
        });
      });

      if (hasNewSections) {
        SECTION_ID_ARRAY.forEach((id) => {
          if (!sectionRefs.current[id]) {
            const element = document.getElementById(id);
            if (element) {
              sectionRefs.current[id] = element;
            }
          }
        });
        setIntersectionObserver();
      }
    });

    const allSectionsFound = SECTION_ID_ARRAY.every(
      (id) => sectionRefs.current[id]
    );
    if (allSectionsFound) {
      mutationObserver.disconnect();
    }

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 디버깅용 콘솔
    // SECTION_ID_ARRAY.forEach((id) => {
    //   const el = document.getElementById(id);
    //   console.log(`${id}:`, el ? "찾음" : "못 찾음", el);
    // });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  const scrollTo = (id: string) => {
    let target = sectionRefs.current[id];

    if (!target) {
      target = document.getElementById(id);
      sectionRefs.current[id] = target;
    }

    doNotChangeRef.current = true;
    target?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);

    setTimeout(() => {
      doNotChangeRef.current = false;
    }, 500);
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
          key="blog-title"
          onClick={() => scrollTo("blog-title")}
          className={`${styles.btn} ${
            activeSection === "blog-title"
              ? styles["btn-selected"]
              : styles["btn-unselected"]
          }`}
        >
          Blog
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
      </div>
    </nav>
  );
}
