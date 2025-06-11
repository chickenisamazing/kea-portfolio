import ScrollToStoredSection from "@/component/client/ScrollToStoredSection";

import AboutMe from "@/component/AboutMe/AboutMe";
import StacksSection from "@/component/Stacks/StacksSection";
import Projects from "@/component/Projects/Projects";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["section-container"]}>
      <ScrollToStoredSection />

      <div id="about-me-title">
        <AboutMe />
      </div>

      <div id="skills-title">
        <StacksSection />
      </div>

      <div id="projects-title">
        <Projects />
      </div>
    </div>
  );
}
