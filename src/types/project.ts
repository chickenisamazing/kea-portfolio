export interface Stack {
  stack: string;
  fontColor: string;
}

export interface Project {
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

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectSkillsProps {
  project: Project;
}

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  [key: string]: unknown;
}
