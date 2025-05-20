import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h2>404 Not Found</h2>
      <p>이 페이지는 존재하지 않아요 !</p>
      <Link href="/">메인 페이지로 돌아가기</Link>
    </div>
  );
}
