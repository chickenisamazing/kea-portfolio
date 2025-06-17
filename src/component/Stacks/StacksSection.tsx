import type { Stack } from "@/types/stacks";

import Stacks from "@/component/Stacks/Stacks";

import { getSkills, getTools } from "@/services/stack";

import styles from "./StacksSection.module.css";

export default async function StacksSection() {
  const { data } = await getSkills();
  const { mappedData } = await getTools();
  return (
    <section className={styles["stacks-container"]}>
      <Stacks title="Skills" data={data ?? []} />
      <Stacks title="Tools" data={(mappedData ?? []) as Stack[]} />
    </section>
  );
}
