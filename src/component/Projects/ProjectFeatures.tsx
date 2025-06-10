import styles from "./ProjectFeatures.module.css";

import ProjectSectionLabel from "./ProjectSectionLabel";

interface Props {
  features: string[];
}

export default function ProjectFeatures({ features }: Props) {
  return (
    <div className={styles["feature-container"]}>
      <ProjectSectionLabel label="구현 기능" />
      {/* <span className={styles["project-label"]}>구현 기능</span> */}
      <ul className={styles["feature-list"]}>
        {features?.map((feature: string) => (
          <li key={feature} className={styles.feature}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
