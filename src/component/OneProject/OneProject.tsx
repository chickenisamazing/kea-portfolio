"use client";

import { type Project } from "@/types/project";
import styles from "./OneProject.module.css";

import OneProjectCard from "./OneProjectCard";

export default function OneProject({ data }: { data: Project }) {
  return (
    <section>
      <div className={styles.content}>
        <h2 id="projects-title" className={styles.title}>
          Projects
        </h2>
        <div className={styles["project-container"]}>
          <OneProjectCard data={data} />
        </div>
      </div>
    </section>
  );
}
