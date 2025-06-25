import { type Project } from "@/types/project";

import { getAllProject } from "@/services/project";

import styles from "./ProjectsPreview.module.css";

import SectionTitle from "../../ui/SectionTitle";
import ProjectPreviewCard from "./ProjectPreviewCard";

export default async function ProjectsSimple() {
  const { data } = await getAllProject();

  return (
    <section>
      <div className={styles.content}>
        <div className={styles["project-container"]}>
          <SectionTitle title="Projects" />
          <div className={styles["card-container"]}>
            {data?.map((project: Project) => (
              <ProjectPreviewCard key={project.project_id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
