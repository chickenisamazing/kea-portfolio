import { type Project } from "@/types/project";

import getAllSupabaseProjectData from "@/services/getAllSupabaseProjectData";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const { data } = await getAllSupabaseProjectData();

  return (
    <section>
      <div className={styles.content}>
        <h2 id="projects-title" className={styles.title}>
          Projects
        </h2>
        <div className={styles["project-container"]}>
          {data?.map((project: Project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
