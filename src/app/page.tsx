import AboutMe from "@/component/AboutMe/AboutMe";

import StacksSection from "@/component/Stacks/StacksSection";
import Projects from "@/component/Projects/Projects";

export default async function Home() {
  return (
    <div>
      <AboutMe />
      <StacksSection />
      <Projects />
    </div>
  );
}
