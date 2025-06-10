import styles from "./ProjectCard.module.css";

import type { ProjectCardProps } from "@/types/project";

import ProjectName from "./ProjectName";
import ProjectImage from "./ProjectImage";
import ProjectDetailContainer from "./ProjectDetailContainer";
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
        <ProjectName name={project.project_name} />

        {/* 프로젝트 캡쳐 이미지 */}
        <ProjectImage image={project.project_image} />

        {/* 프로젝트 유형 */}
        <ProjectDetailContainer project={project} />

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
