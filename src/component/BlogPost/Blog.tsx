import Link from "next/link";

import styles from "./Blog.module.css";
import SectionTitle from "../ui/SectionTitle";

export default function Blog() {
  return (
    <section>
      <div className={styles.content}>
        {/* 타이틀 */}
        <div className={styles.title}>
          <SectionTitle title="Blog" />
        </div>

        {/* 기술 블로그 */}
        <div className={styles["education-container"]}>
          {/* <h3 className={styles["education-title"]}>Dev-Blog</h3> */}
          <dl className={styles["education-list"]}>
            <dt className={styles["education-term"]}>
              <strong>
                기술 블로그에 주관적인 탐구 기록을 작성하고 있습니다
              </strong>
              <Link href={`/blog`}>
                <p>블로그 포스트 Preview</p>
              </Link>
            </dt>
          </dl>
        </div>
      </div>
    </section>
  );
}
