import { ComponentType } from "react";

import styles from "./ProjectSkillsList.module.css";

import type { Stack, IconProps, ProjectCardProps } from "@/types/project";

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
  "Next.js App Router": NextIcon,
  PWA: PWAIcon,
  Zustand: ZustandIcon,
};

export default async function ProjectSkillsList({ project }: ProjectCardProps) {
  return (
    <div className={styles["skills-container"]}>
      <span className={styles["project-label"]}>Skills</span>
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
                  <IconToRender className={styles.icon} color="white" />
                ) : null}
                {stack.stack_name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
