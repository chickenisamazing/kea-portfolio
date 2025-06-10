import styles from "./ProjectDescription.module.css";

import ProjectSectionLabel from "./ProjectSectionLabel";

export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className={styles["description-container"]}>
      <div>
        <ProjectSectionLabel label="프로젝트 개요" />
        {/* <span className={styles["project-label"]}>프로젝트 개요</span> */}
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  );
}
