"use client";

export default function ScrollToTopPassive() {
  const scrollToTop = () => {
    const modal = document.querySelector('[posts-modal="true"]');

    if (modal) {
      modal.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <button type="button" onClick={scrollToTop}>
      맨위로
    </button>
  );
}
