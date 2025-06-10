import styles from "./ProjectDetailContainer.module.css";

import type { Project } from "@/types/project";

import ProjectSectionLabel from "./ProjectSectionLabel";

export default function ProjectDetailContainer({
  project,
}: {
  project: Project;
}) {
  return (
    <dl className={styles["project-detail-list"]}>
      <dt className={styles["project-array"]}>
        <ProjectSectionLabel label="유형" />
      </dt>
      <dd className={styles["project-detail-value"]}>{project.project_type}</dd>

      <dt className={styles["project-array"]}>
        <ProjectSectionLabel label="기간" />
      </dt>
      <dd className={styles["project-detail-value"]}>
        {project.project_duration}
      </dd>

      <dt className={styles["project-array"]}>
        <ProjectSectionLabel label="역할" />
      </dt>
      <dd className={styles["project-detail-value"]}>{project.project_role}</dd>
    </dl>
  );
}
