import styles from "./ProjectDetailContainer.module.css";

import type { ProjectSkillsProps } from "@/types/project";

export default function ProjectDetailContainer({
  project,
}: ProjectSkillsProps) {
  return (
    <dl className={styles["project-detail-list"]}>
      <dt className={styles["project-label"]}>
        <span className={styles["project-detail-term"]}>유형</span>
      </dt>
      <dd className={styles["project-detail-value"]}>{project.project_type}</dd>

      <dt className={styles["project-label"]}>
        <span className={styles["project-detail-term"]}>기간</span>
      </dt>
      <dd className={styles["project-detail-value"]}>
        {project.project_duration}
      </dd>

      <dt className={styles["project-label"]}>
        <span className={styles["project-detail-term"]}>역할</span>
      </dt>
      <dd className={styles["project-detail-value"]}>{project.project_role}</dd>
    </dl>
  );
}
