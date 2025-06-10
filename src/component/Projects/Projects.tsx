import { type Project } from "@/types/project";

import getAllProjectData from "@/services/getAllProjectData";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";
import SectionTitle from "../common/SectionTitle";

export default async function Projects() {
  const { data } = await getAllProjectData();

  return (
    <section>
      <div className={styles.content}>
        <SectionTitle title="Projects" />
        <div className={styles["project-container"]}>
          {data?.map((project: Project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
