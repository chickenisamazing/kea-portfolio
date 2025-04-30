import { ComponentType } from "react";

import styles from "./ProjectSkillsList.module.css";

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

export interface Stack {
  stack: string;
  fontColor: string;
}

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  [key: string]: unknown;
}

interface Project {
  projectId: number;
  name: string;
  type: string;
  duration: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  skills: Stack[];
  features: string[];
  logo: string;
  links: {
    github: string;
    domain: string;
    blogPost: string;
  };
}

interface ProjectSkillsProps {
  project: Project;
}

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

export default function ProjectSkillsList({ project }: ProjectSkillsProps) {
  return (
    <div className={styles["skills-container"]}>
      <span className={styles["project-label"]}>Skills</span>
      <ul className={styles["skill-list"]}>
        {project.skills.map((stack: Stack) => {
          const specificIconComponent = iconComponents[stack.stack];
          const IconToRender = specificIconComponent || ReactIcon;
          return (
            <li
              style={{ background: stack.fontColor }}
              className={styles.skill}
              key={stack.stack}
            >
              <span className={styles["icon-align"]}>
                {IconToRender ? (
                  <IconToRender className={styles.icon} color="white" />
                ) : null}
                {stack.stack}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
