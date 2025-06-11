import styles from "./Stacks.module.css";

import type { StackProps } from "@/types/stacks";
import SectionTitle from "../common/SectionTitle";

import StacksContainer from "./StacksContainer";

export default function Stacks({ title, data }: StackProps) {
  return (
    <section>
      <div className={styles.content}>
        <div className={styles["title-seat"]}>
          <SectionTitle title={title} />
        </div>
        <div className={styles["stacks-container-seat"]}>
          <StacksContainer data={data} />
        </div>
      </div>
    </section>
  );
}
