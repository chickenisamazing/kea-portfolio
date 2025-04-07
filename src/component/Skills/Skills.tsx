import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.title}>Skills.</div>
        <div className={styles["logo-list"]}>스킬들</div>
      </div>
    </div>
  );
}
