"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import styles from "./modal.module.css";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function onDismiss(e: React.MouseEvent) {
    // e.target은 클릭한 요소, e.currentTarget은 이벤트 리스너가 붙은 요소
    if (e.target === e.currentTarget) {
      router.back();
    }
  }

  return (
    <div className={styles["modal-backdrop"]} onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </div>
  );
}
