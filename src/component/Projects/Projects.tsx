// import { projectsData, type Project } from "@/data/projectsData";

import { type Project } from "@/types/project";

import getSupabaseProjectData from "@/services/getSupabaseProjectData";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const { data } = await getSupabaseProjectData();

  return (
    <section>
      <div className={styles.content}>
        <h2 id="projects-title" className={styles.title}>
          Projects
        </h2>
        {/* <div className={styles["project-container"]}>
          {projectsData.map((project: Project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </div> */}
        <div className={styles["project-container"]}>
          {data?.map((project: Project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
