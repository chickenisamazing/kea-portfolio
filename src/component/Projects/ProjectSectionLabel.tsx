import styles from "./ProjectSectionLabel.module.css";

export default function ProjectSectionLabel({ label }: { label: string }) {
  return <span className={styles["project-label"]}>{label}</span>;
}
