import AboutMe from "@/component/AboutMe/AboutMe";
import StacksSection from "@/component/Stacks/StacksSection";
import Projects from "@/component/Projects/Projects";

export default function Home() {
  return (
    <div>
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
