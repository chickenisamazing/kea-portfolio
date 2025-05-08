import Image from "next/image";

import type { Project } from "@/types/project";

import styles from "./OneProject.module.css";

export default function OneProject(data: Project) {
  return (
    <div>
      {" "}
      <article className={styles["project-card"]}>
        {/* 프로젝트 내부 컨테이너 */}
        <div className={styles["project-inner-container"]}>
          {/* 프로젝트명 */}
          <div className={styles["project-name-container"]}>
            <h3 className={styles["project-name"]}>{data.project_name}</h3>
          </div>
          {/* 프로젝트 캡쳐 이미지 */}
          <Image
            className={styles["project-image"]}
            src="/assets/temp_browser_image.png"
            alt="프로젝트 이미지"
            width={700}
            height={350}
          />
          {/* 프로젝트 유형 */}
          <dl className={styles["project-detail-list"]}>
            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>유형</span>
            </dt>
            <dd className={styles["project-detail-value"]}>
              {data.project_type}
            </dd>

            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>기간</span>
            </dt>
            <dd className={styles["project-detail-value"]}>
              {data.project_duration}
            </dd>

            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>역할</span>
            </dt>
            <dd className={styles["project-detail-value"]}>
              {data.project_role}
            </dd>
          </dl>

          {/* 프로젝트 개요 */}
          <div className={styles["description-container"]}>
            <div>
              <span className={styles["project-label"]}>프로젝트 개요</span>
            </div>
            <span className={styles.description}>
              {data.project_description}
            </span>
          </div>

          {/* <ProjectSkillsList project={project} /> */}

          {/* 구현 기능 */}
          <div className={styles["feature-container"]}>
            <span className={styles["project-label"]}>구현 기능</span>
            <ul className={styles["feature-list"]}>
              {data.project_features?.map((feature: string) => (
                <li key={feature} className={styles.feature}>
                  {feature}
                </li>
              ))}{" "}
            </ul>
          </div>

          {/* 프로젝트 링크 컨테이너 */}
          <div className={styles["project-link-container"]}>
            <a
              href={data.project_github_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${data.project_name} 깃허브 레포지토리 보러가기`}
            >
              {data.project_logo && (
                <Image
                  className={styles["project-link-logo"]}
                  src="/assets/logos/others/Github_logo.svg"
                  // src={project.project_logo}
                  alt="깃허브"
                  width={48}
                  height={48}
                />
              )}
            </a>
            <a
              href={data.project_domain_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${data.project_name} 프로젝트의 배포된 웹사이트 보러가기`}
            >
              {data.project_logo && (
                <Image
                  className={styles["project-link-logo"]}
                  src={data.project_logo}
                  alt="배포된 도메인"
                  width={48}
                  height={48}
                />
              )}
            </a>
            <a
              href={data.project_blog_post_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${data.project_name} 프로젝트 블로그 회고 보러가기`}
            >
              <Image
                className={styles["project-link-logo"]}
                src="/assets/logos/others/Tistory_logo.svg"
                alt="해당 프로젝트 블로그 포스팅"
                width={48}
                height={48}
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
