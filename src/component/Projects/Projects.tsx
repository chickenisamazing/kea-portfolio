import { type Project } from "@/types/project";

import getAllProjectData from "@/services/getAllProjectData";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const { data } = await getAllProjectData();

  return (
    <section id="projects-title">
      <div className={styles.content}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles["project-container"]}>
          {data?.map((project: Project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
