import styles from "./ProjectName.module.css";

export default function ProjectName({ name }: { name: string }) {
  return (
    <div className={styles["project-name-container"]}>
      <h3 className={styles["project-name"]}>{name}</h3>
    </div>
  );
}
