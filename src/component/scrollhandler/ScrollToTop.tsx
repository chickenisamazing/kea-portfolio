"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 30);
  }, []);
  return null;
}
