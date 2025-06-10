import Image from "next/image";
import Link from "next/link";

import type { ProjectSkillsProps } from "@/types/project";

import styles from "./ProjectLinkContainer.module.css";

export default function ProjectLinkContainer({ project }: ProjectSkillsProps) {
  return (
    <div className={styles["project-link-container"]}>
      <Link
        href={`/project/${project.project_id}`}
        scroll={false}
        aria-label={`${project.project_name} 프로젝트 상세 페이지로 이동`}
      >
        {project.project_logo && (
          <Image
            className={styles["project-link-logo"]}
            src="/assets/navigate_to_project_detail.png"
            alt={`${project.project_name} 프로젝트 상세 이동 버튼`}
            width={48}
            height={48}
          />
        )}
      </Link>
      <a
        href={project.project_github_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.project_name} 깃허브 레포지토리 보러가기`}
      >
        {project.project_logo && (
          <Image
            className={styles["project-link-logo"]}
            src="/assets/logos/others/Github_logo.svg"
            alt="깃허브"
            width={48}
            height={48}
            unoptimized
          />
        )}
      </a>
      <a
        href={project.project_domain_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.project_name} 프로젝트의 배포된 웹사이트 보러가기`}
      >
        {project.project_logo && (
          <Image
            className={styles["project-link-logo"]}
            src={project.project_logo}
            alt="배포된 도메인"
            width={48}
            height={48}
          />
        )}
      </a>
      <a
        href={project.project_blog_post_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.project_name} 프로젝트 블로그 회고 보러가기`}
      >
        <Image
          className={styles["project-link-logo"]}
          src="/assets/logos/others/Tistory_logo.svg"
          alt="해당 프로젝트 블로그 포스팅"
          width={48}
          height={48}
          unoptimized
        />
      </a>
    </div>
  );
}
