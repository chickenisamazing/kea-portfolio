import styles from "./LoadingSpinner.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}
