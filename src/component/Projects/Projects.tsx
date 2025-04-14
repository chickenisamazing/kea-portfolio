"use client";

// import { useState } from "react";
import Image from "next/image";
import { projectsData, type Project } from "@/data/projectsData";

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
            <div key={project.projectId}>
              <span className={styles["project-name"]}>{project.name}</span>
              <div className={styles["image-desc-container"]}>
                <Image
                  className={styles["browser-image"]}
                  src={project.image.src}
                  alt={project.image.alt}
                  width={400}
                  height={200}
                  priority
                />
                <div>
                  <dl className={styles["dl-style"]}>
                    <dt className={styles["dt-style"]}>유형</dt>
                    <dd className={styles["dd-style"]}>{project.type}</dd>

                    <dt className={styles["dt-style"]}>기간</dt>
                    <dd className={styles["dd-style"]}>{project.duration}</dd>

                    <dt className={styles["dt-style"]}>역할</dt>
                    <dd className={styles["dd-style"]}>{project.role}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
