import { ComponentType } from "react";

import smallStyles from "./ProjectSkillsListSmall.module.css";
import bigStyles from "./ProjectSkillsListBig.module.css";

import type { Stack, IconProps, Project } from "@/types/project";

import ProjectSectionLabel from "./ProjectSectionLabel";

import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";
import CSSModulesIcon from "../icons/CSSModulesIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import TailwindCSSIcon from "../icons/TailwindCSSIcon";
import PWAIcon from "../icons/PWAIcon";
import ZustandIcon from "../icons/ZustandIcon";

const iconComponents: { [key: string]: ComponentType<IconProps> } = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  "CSS Modules": CSSModulesIcon,
  "Tailwind CSS": TailwindCSSIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  "Next.js": NextIcon,
  PWA: PWAIcon,
  Zustand: ZustandIcon,
};

export default async function ProjectSkillsList({
  project,
  badge,
  size,
}: {
  project: Project;
  badge: string;
  size: number;
}) {
  const styles = badge === "small" ? smallStyles : bigStyles;

  return (
    <div className={styles["skills-container"]}>
      <ProjectSectionLabel label="Skills" />
      <ul className={styles["skill-list"]}>
        {project.stacks?.map((stack: Stack) => {
          const specificIconComponent = iconComponents[stack.stack_name];
          const IconToRender = specificIconComponent || ReactIcon;
          return (
            <li
              style={{ background: stack.stack_color }}
              className={styles.skill}
              key={stack.stack_id}
            >
              <span className={styles["icon-align"]}>
                {IconToRender ? (
                  <IconToRender
                    className={styles.icon}
                    color="white"
                    size={size}
                  />
                ) : null}
                <p className={styles["stack-name"]}>{stack.stack_name}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
