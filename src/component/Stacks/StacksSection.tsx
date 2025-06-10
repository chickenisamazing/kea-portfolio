import type { Stack } from "@/types/stacks";

import Stacks from "@/component/Stacks/Stacks";

import getSkillsData from "@/services/getSkillsData";
import getToolsData from "@/services/getToolsData";

// import styles from "./StacksSection.module.css";

export default async function StacksSection() {
  const { data } = await getSkillsData();
  const { mappedData } = await getToolsData();
  return (
    <section>
      <Stacks title="Skills" data={data ?? []} />
      <Stacks title="Tools" data={(mappedData ?? []) as Stack[]} />
    </section>
  );
}
