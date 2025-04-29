import dynamic from "next/dynamic";

import AboutMe from "@/component/AboutMe/AboutMe";

import { skillsData } from "@/data/skillsData";
import { toolsData } from "@/data/toolsData";

const Stacks = dynamic(() => import("@/component/Stacks/Stacks"));
const Projects = dynamic(() => import("@/component/Projects/Projects"));

export default function Home() {
  return (
    <div>
      <AboutMe />
      {/* <Skills /> */}
      {/* <Tools /> */}
      <Stacks data={skillsData} />
      <Stacks data={toolsData} />
      <Projects />
    </div>
  );
}
