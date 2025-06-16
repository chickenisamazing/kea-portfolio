import React, { useState, useEffect, Suspense } from "react";

import styles from "./StackDescription.module.css";

const ClientBlogPost = React.lazy(
  () => import("@/component/BlogPost/ClientBlogPost")
);

interface Props {
  color: string;
  name: string;
  description: string[];
}

export default function StackDescription({ color, name, description }: Props) {
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
        <button
          type="button"
          className={styles["open-blog-text"]}
          onClick={setBlogAreaState}
        >
          블로그 포스팅 펼치기
        </button>
      </div>

      {blogArea && (
        <Suspense fallback={null}>
          <ClientBlogPost category={name} />
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
