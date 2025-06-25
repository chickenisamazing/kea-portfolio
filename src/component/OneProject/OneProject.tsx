import { type Project } from "@/types/project";
import styles from "./OneProject.module.css";

import ProjectCard from "@/component/Projects/detail/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

interface OneProjectProps {
  data: Project;
  showTitle?: boolean;
}

export default function OneProject({
  data,
  showTitle = true,
}: OneProjectProps) {
  return (
    <section id="projects-title">
      <div className={styles.content}>
        {showTitle && <SectionTitle title="Projects" />}
        <div className={styles["project-container"]}>
          <ProjectCard project={data} />
        </div>
      </div>
    </section>
  );
}
