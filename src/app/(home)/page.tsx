import ScrollToStoredSection from "@/component/scroll/ScrollToStoredSection";

import AboutMe from "@/component/AboutMe/AboutMe";
import StacksSection from "@/component/Stacks/StacksSection";
import Blog from "@/component/BlogPost/Blog";
// import Projects from "@/component/Projects/Projects";
import ProjectsPreivew from "@/component/Projects/list/ProjectsPreview";

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

      <div id="blog-title">
        <Blog />
      </div>

      {/* <div id="projects-title">
        <Projects />
      </div> */}

      <div id="projects-title">
        <ProjectsPreivew />
      </div>
    </div>
  );
}
