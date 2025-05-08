// SSG -> SSR TEST
export const dynamic = "force-dynamic";

// Lazy loading (자식 컴포넌트)
import dynamicImport from "next/dynamic";

import type { Stack } from "@/types/stacks";

import AboutMe from "@/component/AboutMe/AboutMe";

// import { skillsData } from "@/data/skillsData";
// import { toolsData } from "@/data/toolsData";

import getSupabaseSkillsData from "@/services/getSupabaseSkillsData";
import getSupabaseToolsData from "@/services/getSupabaseToolsData";

const Stacks = dynamicImport(() => import("@/component/Stacks/Stacks"));
const Projects = dynamicImport(() => import("@/component/Projects/Projects"));

export default async function Home() {
  const { data } = await getSupabaseSkillsData();
  const { mappedData } = await getSupabaseToolsData();

  return (
    <div>
      <AboutMe />
      <Stacks title="Skills" data={data ?? []} />
      <Stacks title="Tools" data={(mappedData ?? []) as Stack[]} />
      <Projects />
    </div>
  );
}
