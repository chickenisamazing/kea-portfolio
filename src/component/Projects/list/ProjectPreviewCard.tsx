import Link from "next/link";

import styles from "./ProjectPreviewCard.module.css";

import type { Project } from "@/types/project";

import ProjectName from "../ProjectName";
// import ProjectDetailContainer from "./ProjectDetailContainer";
import ProjectDescription from "../ProjectDescription";
import ProjectSkillsList from "../ProjectSkillsList";
import ProjectFeatures from "../ProjectFeatures";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles["project-card"]}>
      {/* 프로젝트 내부 컨테이너 */}
      <div className={styles["project-inner-container"]}>
        {/* 프로젝트명 */}
        <div className={styles["project-name-seat"]}>
          <ProjectName name={project.project_name} />
        </div>

        {/* 프로젝트 유형 */}
        {/* <div className={styles["project-detail-container-seat"]}>
          <ProjectDetailContainer project={project} />
        </div> */}

        {/* 프로젝트 기술 스택 리스트 */}
        <div className={styles["project-skills-list-seat"]}>
          <ProjectSkillsList project={project} badge={"small"} size={13} />
        </div>

        {/* 프로젝트 개요 */}
        <div className={styles["project-description-seat"]}>
          <ProjectDescription description={project.project_description} />
        </div>

        {/* 구현 기능 */}
        <div className={styles["project-features-seat"]}>
          <ProjectFeatures features={project.project_features} />
        </div>

        <Link
          href={`/project/${project.project_id}`}
          scroll={false}
          aria-label={`${project.project_name} 프로젝트 상세 페이지로 이동`}
        >
          모달
        </Link>
      </div>
    </article>
  );
}
