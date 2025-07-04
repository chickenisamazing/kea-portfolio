"use client";

import { useEffect } from "react";
import Link from "next/link";

import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.content}>
      <h2>! Error !</h2>
      <p>이 페이지에서 무언가 에러가 발생했어요 !</p>
      <Link href="/" className={styles["circle-wrapper"]}>
        <p className={styles["return-to-main"]}>메인 페이지로 돌아가기</p>
        <div id="hover-icon" className={styles.circle} />
      </Link>
      {/* 리렌더링 시도 */}
      <button type="button" onClick={() => reset()}>
        다시 시도
      </button>
    </main>
  );
}
