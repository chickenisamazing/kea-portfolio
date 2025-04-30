import { projectsData, type Project } from "@/data/projectsData";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>
      <div className={styles.content}>
        <h2 id="projects-title" className={styles.title}>
          Projects
        </h2>
        <div className={styles["project-container"]}>
          {projectsData.map((project: Project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
