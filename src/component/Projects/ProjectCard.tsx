import { ComponentType } from "react";

import Image from "next/image";

import styles from "./Projects.module.css";

import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";
import CSSModulesIcon from "../icons/CSSModulesIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import TailwindCSSIcon from "../icons/TailwindCSSIcon";
import PWAIcon from "../icons/PWAIcon";
import ZustandIcon from "../icons/ZustandIcon";

export interface Stack {
  stack: string;
  fontColor: string;
}

interface Project {
  projectId: number;
  name: string;
  type: string;
  duration: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  skills: Stack[];
  features: string[];
  logo: string;
  links: {
    github: string;
    domain: string;
    blogPost: string;
  };
}

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  [key: string]: unknown;
}

const iconComponents: { [key: string]: ComponentType<IconProps> } = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  "CSS Modules": CSSModulesIcon,
  "Tailwind CSS": TailwindCSSIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  "Next.js App Router": NextIcon,
  PWA: PWAIcon,
  Zustand: ZustandIcon,
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <article key={project.projectId} className={styles["project-card"]}>
        {/* 프로젝트 내부 컨테이너 */}
        <div className={styles["project-inner-container"]}>
          {/* 프로젝트명 */}
          <div className={styles["project-name-container"]}>
            <h3 className={styles["project-name"]}>{project.name}</h3>
          </div>
          {/* 프로젝트 캡쳐 이미지 */}
          <Image
            className={styles["project-image"]}
            src={project.image.src}
            alt={project.image.alt}
            width={700}
            height={350}
          />

          {/* 프로젝트 유형 */}
          <dl className={styles["project-detail-list"]}>
            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>유형</span>
            </dt>
            <dd className={styles["project-detail-value"]}>{project.type}</dd>

            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>기간</span>
            </dt>
            <dd className={styles["project-detail-value"]}>
              {project.duration}
            </dd>

            <dt className={styles["project-label"]}>
              <span className={styles["project-detail-term"]}>역할</span>
            </dt>
            <dd className={styles["project-detail-value"]}>{project.role}</dd>
          </dl>

          {/* 프로젝트 개요 */}
          <div className={styles["description-container"]}>
            <div>
              <span className={styles["project-label"]}>프로젝트 개요</span>
            </div>
            <span className={styles.description}>{project.description}</span>
          </div>

          {/* 기술 스택 */}
          <div className={styles["skills-container"]}>
            <span className={styles["project-label"]}>Skills</span>
            <ul className={styles["skill-list"]}>
              {project.skills.map((stack: Stack) => {
                const specificIconComponent = iconComponents[stack.stack];
                const IconToRender = specificIconComponent || ReactIcon;
                return (
                  <li
                    style={{ background: stack.fontColor }}
                    className={styles.skill}
                    key={stack.stack}
                  >
                    <span className={styles["icon-align"]}>
                      {IconToRender ? (
                        <IconToRender className={styles.icon} color="white" />
                      ) : null}
                      {stack.stack}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 구현 기능 */}
          <div className={styles["feature-container"]}>
            <span className={styles["project-label"]}>구현 기능</span>
            <ul className={styles["feature-list"]}>
              {project.features.map((feature: string) => (
                <li key={feature} className={styles.feature}>
                  {feature}
                </li>
              ))}{" "}
            </ul>
          </div>

          {/* 프로젝트 링크 컨테이너 */}
          <div className={styles["project-link-container"]}>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["project-link-logo"]}
                src="/assets/logos/tools/Github_logo.svg"
                alt="github repository"
                width={48}
                height={48}
              />
            </a>
            <a
              href={project.links.domain}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["project-link-logo"]}
                src={project.logo}
                alt="배포된 도메인"
                width={48}
                height={48}
              />
            </a>
            <a
              href={project.links.blogPost}
              target="_blank"
              rel="noopener noreferrer"
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
    </>
  );
}
