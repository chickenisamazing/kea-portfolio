import LoadingSpinner from "@/component/LoadingSpinner/LoadingSpinner";

import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.location}>
      <LoadingSpinner />
    </div>
  );
}
