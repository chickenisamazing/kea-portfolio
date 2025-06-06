export interface Stack {
  stack_id: number;
  stack_name: string;
  stack_image_url: string;
  stack_category: string;
  stack_color: string;
  stack_description: string[];
}

export interface Project {
  project_id: number;
  project_name: string;
  project_type: string;
  project_duration: string;
  project_role: string;
  stacks: Stack[];
  project_description: string;
  project_features: string[];
  project_github_link: string;
  project_domain_link: string;
  project_blog_post_link: string;
  project_logo: string;
  // projectId: number;
  // name: string;
  // type: string;
  // duration: string;
  // role: string;
  // image: {
  //   src: string;
  //   alt: string;
  // };
  // description: string;
  // skills: Stack[];
  // features: string[];
  // logo: string;
  // links: {
  //   github: string;
  //   domain: string;
  //   blogPost: string;
  // };
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
