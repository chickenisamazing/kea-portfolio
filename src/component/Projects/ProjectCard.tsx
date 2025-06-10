import Image from "next/image";
import styles from "./ProjectCard.module.css";

import type { ProjectCardProps } from "@/types/project";

import ProjectDescription from "./ProjectDescription";
import ProjectSkillsList from "./ProjectSkillsList";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinkContainer from "./ProjectLinkContainer";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles["project-card"]}>
      {/* 프로젝트 내부 컨테이너 */}
      <div className={styles["project-inner-container"]}>
        {/* 프로젝트명 */}
        <div className={styles["project-name-container"]}>
          <h3 className={styles["project-name"]}>{project.project_name}</h3>
        </div>
        {/* 프로젝트 캡쳐 이미지 */}
        <Image
          className={styles["project-image"]}
          src={project.project_image}
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
            {project.project_type}
          </dd>

          <dt className={styles["project-label"]}>
            <span className={styles["project-detail-term"]}>기간</span>
          </dt>
          <dd className={styles["project-detail-value"]}>
            {project.project_duration}
          </dd>

          <dt className={styles["project-label"]}>
            <span className={styles["project-detail-term"]}>역할</span>
          </dt>
          <dd className={styles["project-detail-value"]}>
            {project.project_role}
          </dd>
        </dl>

        {/* 프로젝트 개요 */}
        <ProjectDescription description={project.project_description} />

        {/* 프로젝트 기술 스택 리스트 */}
        <ProjectSkillsList project={project} />

        {/* 구현 기능 */}
        <ProjectFeatures features={project.project_features} />

        {/* 프로젝트 링크 컨테이너 */}
        <ProjectLinkContainer project={project} />
      </div>
    </article>
  );
}
