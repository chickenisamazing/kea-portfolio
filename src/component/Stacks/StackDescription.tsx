import React, { useState, useEffect, Suspense } from "react";

import styles from "./StackDescription.module.css";

const ClientBlogPosts = React.lazy(
  () => import("@/component/BlogPost/ClientBlogPosts")
);

interface Props {
  color: string;
  name: string;
  description: string[];
  title: string;
}

export default function StackDescription({
  color,
  name,
  description,
  title,
}: Props) {
  const [blogArea, setBlogArea] = useState<boolean>(false);

  useEffect(() => {
    setBlogArea(false);
  }, [name]);

  const setBlogAreaState = () => {
    setBlogArea(!blogArea);
  };

  return (
    <div className={styles.description}>
      <div className={styles.between}>
        <span
          style={{ color: color }}
          className={styles["selected-skill-name"]}
        >
          {name}
        </span>

        {title === "Skills" ? (
          <button
            type="button"
            className={styles["open-blog-text"]}
            onClick={setBlogAreaState}
          >
            블로그 포스팅 {blogArea ? "닫기" : "펼치기"}
          </button>
        ) : null}
      </div>

      {blogArea && (
        <Suspense fallback={null}>
          <ClientBlogPosts category={name} />
        </Suspense>
      )}

      <ul className={styles["sentence-list"]}>
        {description.map((sentence: string) => (
          <li key={sentence} className={styles.sentence}>
            · {sentence}
          </li>
        ))}
      </ul>
    </div>
  );
}
