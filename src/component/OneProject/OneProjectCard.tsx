import type { Project } from "@/types/project";

import styles from "./OneProjectCard.module.css";

import ProjectName from "../Projects/ProjectName";
import ProjectImage from "../Projects/ProjectImage";
import ProjectDetailContainer from "../Projects/ProjectDetailContainer";
import ProjectDescription from "../Projects/ProjectDescription";
import ProjectSkillsList from "../Projects/ProjectSkillsList";
import ProjectFeatures from "../Projects/ProjectFeatures";
import ProjectLinkContainer from "../Projects/ProjectLinkContainer";

export default function OneProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <article className={styles["project-card"]}>
        {/* 프로젝트 내부 컨테이너 */}
        <div className={styles["project-inner-container"]}>
          {/* 프로젝트명 */}
          <div className={styles["project-name-seat"]}>
            <ProjectName name={project.project_name} />
          </div>

          {/* 프로젝트 캡쳐 이미지 */}
          <div className={styles["project-image-seat"]}>
            <ProjectImage image={project.project_image} />
          </div>

          {/* 프로젝트 유형 */}
          <div className={styles["project-detail-container-seat"]}>
            <ProjectDetailContainer project={project} />
          </div>

          {/* 프로젝트 개요 */}
          <div className={styles["project-description-seat"]}>
            <ProjectDescription description={project.project_description} />
          </div>

          {/* 프로젝트 기술 스택 리스트 */}
          <div className={styles["project-skills-list-seat"]}>
            <ProjectSkillsList project={project} />
          </div>

          {/* 구현 기능 */}
          <div className={styles["project-features-seat"]}>
            <ProjectFeatures features={project.project_features} />
          </div>

          {/* 프로젝트 링크 컨테이너 */}
          <div className={styles["project-link-container-seat"]}>
            <ProjectLinkContainer project={project} />
          </div>
        </div>
      </article>
    </div>
  );
}
