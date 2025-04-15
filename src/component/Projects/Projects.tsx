"use client";

// import { useState } from "react";
import Image from "next/image";
import { projectsData, type Project, type Stack } from "@/data/projectsData";

import styles from "./Projects.module.css";

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
                  width={400}
                  height={200}
                  priority
                />

                {/* 프로젝트 유형 */}
                <dl className={styles["dl-style"]}>
                  <dt className={styles["dt-style"]}>유형</dt>
                  <dd className={styles["dd-style"]}>{project.type}</dd>

                  <dt className={styles["dt-style"]}>기간</dt>
                  <dd className={styles["dd-style"]}>{project.duration}</dd>

                  <dt className={styles["dt-style"]}>역할</dt>
                  <dd className={styles["dd-style"]}>{project.role}</dd>
                </dl>

                {/* 기술 스택 + 구현 기능 컨테이너 */}
                <div className={styles["skills-feature-container"]}>
                  {/* 기술 스택 */}
                  <div className={styles["skills-container"]}>
                    <span className={styles["skill-list-name"]}>Skills</span>
                    <div className={styles["skill-list"]}>
                      {project.skills.map((stack: Stack) => (
                        <span
                          style={{ background: stack.fontColor }}
                          className={styles["skill"]}
                          key={stack.stack}
                        >
                          {stack.stack}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 구현 기능 */}
                  <div className={styles["feature-container"]}>
                    <span className={styles["feature-name"]}>구현 기능</span>
                    <div className={styles["feature-list"]}>
                      {project.features.map(
                        (feature: string, index: number) => (
                          <span key={index} className={styles.feature}>
                            {feature}
                          </span>
                        )
                      )}{" "}
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
