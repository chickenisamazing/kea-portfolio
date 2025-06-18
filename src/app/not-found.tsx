import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.content}>
      <h2>404 Not Found</h2>
      <p>이 페이지는 존재하지 않아요 !</p>
      <Link href={`/`} className={styles["circle-wrapper"]}>
        <p className={styles["return-to-main"]}>메인 페이지로 돌아가기</p>
        <div id="hover-icon" className={styles.circle} />
      </Link>
    </main>
  );
}
