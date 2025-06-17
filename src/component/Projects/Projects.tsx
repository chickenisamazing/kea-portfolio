import { type Project } from "@/types/project";

import { getAllProject } from "@/services/project";

import styles from "./Projects.module.css";

import ProjectCard from "./ProjectCard";
import SectionTitle from "../ui/SectionTitle";

export default async function Projects() {
  const { data } = await getAllProject();

  return (
    <section>
      <div className={styles.content}>
        <div className={styles["project-container"]}>
          <SectionTitle title="Projects" />
          {data?.map((project: Project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
