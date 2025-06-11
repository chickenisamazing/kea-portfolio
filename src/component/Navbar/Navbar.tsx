"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "./Navbar.module.css";

const SECTION_ID_ARRAY = ["about-me-title", "skills-title", "projects-title"];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const doNotChangeRef = useRef(false);

  useEffect(() => {
    if (pathname.startsWith("/project")) {
      setActiveSection("projects-title");
      return;
    }

    if (pathname === "/") {
      SECTION_ID_ARRAY.forEach((id) => {
        sectionRefs.current[id] = document.getElementById(id);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.isIntersecting, "????");
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

      SECTION_ID_ARRAY.forEach((id) => {
        const el = sectionRefs.current[id];
        if (el) {
          observer.observe(el);
        }
      });

      // 디버깅용 콘솔
      SECTION_ID_ARRAY.forEach((id) => {
        const el = document.getElementById(id);
        console.log(`${id}:`, el ? "찾음" : "못 찾음", el);
      });

      return () => observer.disconnect();
    }
    setActiveSection("");
  }, [pathname]);

  const scrollTo = (id: string) => {
    if (pathname === "/") {
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
    } else {
      sessionStorage.setItem("section-id", id);
      // setActiveSection(id);
      router.push(`/`);
    }
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
