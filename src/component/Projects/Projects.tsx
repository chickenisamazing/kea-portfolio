"use client";

import { ComponentType } from "react";

// import { useState } from "react";
import Image from "next/image";
import { projectsData, type Project, type Stack } from "@/data/projectsData";

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

export default function Projects() {
  return (
    <div>
      <div className={styles.content}>
        <h2 id="projects-title" className={styles.title}>
          Projects
        </h2>
        <div className={styles["project-container"]}>
          {projectsData.map((project: Project) => (
            <div key={project.projectId} className={styles["project-card"]}>
              {/* 프로젝트 내부 컨테이너 */}
              <div className={styles["project-inner-container"]}>
                {/* 프로젝트명 */}
                <div className={styles["project-name-container"]}>
                  <span className={styles["project-name"]}>{project.name}</span>
                </div>
                {/* 프로젝트 캡쳐 이미지 */}
                <Image
                  className={styles["browser-image"]}
                  src={project.image.src}
                  alt={project.image.alt}
                  width={700}
                  height={350}
                  priority
                />

                {/* 프로젝트 유형 */}
                <dl className={styles["dl-style"]}>
                  <dt className={styles["dt-style"]}>
                    <span className={styles["dt-span-style"]}>유형</span>
                  </dt>
                  <dd className={styles["dd-style"]}>{project.type}</dd>

                  <dt className={styles["dt-style"]}>
                    <span className={styles["dt-span-style"]}>기간</span>
                  </dt>
                  <dd className={styles["dd-style"]}>{project.duration}</dd>

                  <dt className={styles["dt-style"]}>
                    <span className={styles["dt-span-style"]}>역할</span>
                  </dt>
                  <dd className={styles["dd-style"]}>{project.role}</dd>
                </dl>

                {/* 기술 스택 + 구현 기능 컨테이너 */}
                <div className={styles["skills-feature-container"]}>
                  {/* 기술 스택 */}
                  <div className={styles["skills-container"]}>
                    <span className={styles["skill-list-name"]}>Skills</span>
                    <div className={styles["skill-list"]}>
                      {project.skills.map((stack: Stack) => {
                        const specificIconComponent =
                          iconComponents[stack.stack];

                        const IconToRender = specificIconComponent || ReactIcon;
                        return (
                          <span
                            style={{ background: stack.fontColor }}
                            className={styles["skill"]}
                            key={stack.stack}
                          >
                            <span className={styles["icon-align"]}>
                              {IconToRender ? (
                                <IconToRender
                                  className={styles.icon}
                                  color="white"
                                />
                              ) : null}
                              {stack.stack}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* 구현 기능 */}
                  <div className={styles["feature-container"]}>
                    <span className={styles["feature-name"]}>구현 기능</span>
                    <div className={styles["feature-list"]}>
                      {project.features.map((feature: string) => (
                        <span key={feature} className={styles.feature}>
                          {feature}
                        </span>
                      ))}{" "}
                    </div>
                  </div>
                </div>

                {/* 프로젝트 개요 */}
                <div className={styles["description-container"]}>
                  <span className={styles["description-name"]}>
                    프로젝트 개요
                  </span>
                  <span className={styles.description}>
                    {project.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
