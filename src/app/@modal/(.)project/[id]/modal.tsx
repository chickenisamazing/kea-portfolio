"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
// import { createPortal } from "react-dom";

import styles from "./modal.module.css";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div className={styles["modal-backdrop"]} onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation} className={styles.modal}>
        {children}
      </div>
    </div>
  );
}
