import Image from "next/image";

import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section>
      <div className={styles.content}>
        <h2 id="about-me-title" className={styles.title}>
          About Me
        </h2>
        <Image
          className={styles["profile-image"]}
          src="/assets/profile_image_penrose.svg"
          alt="kea's profile image"
          width={288}
          height={288}
          priority
        />
        <dl className={styles["link-container"]}>
          <dt className={styles["link-category"]}>github.</dt>
          <dd className={styles["link-link-group"]}>
            <a
              href="https://github.com/chickenisamazing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              github.com/chickenisamazing
            </a>
          </dd>

          <dt className={styles["link-category"]}>blog.</dt>
          <dd className={styles["link-link-group"]}>
            <a
              href="https://unhandled.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              unhandled.tistory.com
            </a>
          </dd>

          <dt className={styles["link-category"]}>email.</dt>
          <dd className={styles["link-link-group"]}>
            <a
              href="mailto:kakapokachip@gmail.com"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              kakapokachip@gmail.com
            </a>
          </dd>
        </dl>
        <p className={styles.description}>
          <span className={styles.sentence}>저는</span>
          <span className={styles.sentence}>
            <span className={styles.thinking}>객관적 이성</span>을 추구하는
          </span>
          <span className={styles.sentence}>
            <span className={styles.feeling}>감정</span>이 있는
          </span>
          <span className={styles.sentence}>
            프론트엔드 개발자 <strong>케아</strong>입니다.
          </span>
        </p>
        <p className={styles["description-2"]}>
          <span className={styles["sentence-2"]}>저는</span>
          <span className={styles["sentence-2"]}>
            <strong>어떻게(How)</strong>만큼의 <strong>왜(Why)</strong>를
            추구합니다.
          </span>
          <span className={styles["sentence-2"]}>
            <strong>개념적 명확성</strong>을 추구합니다.
          </span>
        </p>

        <p className={styles["description-2"]}>
          <span className={styles["education-container"]}>
            <span className={styles["education-title"]}>education</span>
            <span className={styles["education-sentence"]}>
              2023.07 ~ 2024.06
            </span>
            <span className={styles["education-sentence-2"]}>
              <strong>삼성 청년 SW 아카데미 10기 수료</strong>
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
