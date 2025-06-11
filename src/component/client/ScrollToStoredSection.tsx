"use client";

import { useEffect } from "react";

export default function ScrollToStoredSection() {
  useEffect(() => {
    const target = sessionStorage.getItem("section-id");
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);
  return null;
}
