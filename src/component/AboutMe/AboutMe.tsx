import Image from "next/image";

import styles from "./AboutMe.module.css";
import SectionTitle from "../ui/SectionTitle";

export default function AboutMe() {
  return (
    <section>
      <div className={styles.content}>
        {/* 타이틀 */}
        <div className={styles.title}>
          <SectionTitle title="About Me" />
        </div>
        {/* 프로필 이미지 */}
        <Image
          className={styles["profile-image"]}
          src="/assets/profile_image_penrose.svg"
          alt="kea's profile image"
          width={288}
          height={288}
          unoptimized
          priority
        />

        {/* 링크 리스트 */}
        <dl className={styles["link-container"]}>
          <dt className={styles["link-category"]}>github.</dt>
          <dd className={styles["link-item"]}>
            <a
              href="https://github.com/chickenisamazing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link-sentence"]}
            >
              github.com/chickenisamazing
            </a>
          </dd>

          <dt className={styles["link-category"]}>blog.</dt>
          <dd className={styles["link-item"]}>
            <a
              href="https://unhandled.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link-sentence"]}
            >
              unhandled.tistory.com
            </a>
          </dd>

          <dt className={styles["link-category"]}>email.</dt>
          <dd className={styles["link-item"]}>
            <a
              href="mailto:kakapokachip@gmail.com"
              rel="noopener noreferrer"
              className={styles["link-sentence"]}
            >
              kakapokachip@gmail.com
            </a>
          </dd>
        </dl>

        {/* 자기소개 슬로건 */}
        <div className={styles.slogan}>
          <p className={styles.sentence}>저는</p>
          <p className={styles.sentence}>
            <span className={styles.thinking}>객관적 이성</span>을 추구하는
          </p>
          <p className={styles.sentence}>
            <span className={styles.feeling}>감정</span>이 있는
          </p>
          <p className={styles.sentence}>
            프론트엔드 개발자 <strong>케아</strong>입니다.
          </p>
        </div>

        {/* 가치관 */}
        <div className={styles.values}>
          <p>저는</p>
          <p>
            <strong>어떻게(How)</strong>만큼의 <strong>왜(Why)</strong>를
            추구합니다.
          </p>
          <p>
            <strong>개념적 명확성</strong>을 추구합니다.
          </p>
        </div>

        {/* 교육사항 */}
        <div className={styles["education-container"]}>
          <h3 className={styles["education-title"]}>Education</h3>
          <dl className={styles["education-list"]}>
            <dt className={styles["education-term"]}>
              <strong>삼성 청년 SW 아카데미 10기 수료</strong>
            </dt>
            <dd className={styles["education-sentence"]}>2023.07 ~ 2024.06</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
