// SSG -> SSR TEST
// export const dynamic = "force-dynamic";

// Lazy loading (자식 컴포넌트)
import dynamicImport from "next/dynamic";

import type { Stack } from "@/types/stacks";

import AboutMe from "@/component/AboutMe/AboutMe";

import getSkillsData from "@/services/getSkillsData";
import getToolsData from "@/services/getToolsData";

const Stacks = dynamicImport(() => import("@/component/Stacks/Stacks"));
const Projects = dynamicImport(() => import("@/component/Projects/Projects"));

export default async function Home() {
  const { data } = await getSkillsData();
  const { mappedData } = await getToolsData();

  return (
    <div>
      <AboutMe />
      <Stacks title="Skills" data={data ?? []} />
      <Stacks title="Tools" data={(mappedData ?? []) as Stack[]} />
      <Projects />
    </div>
  );
}
