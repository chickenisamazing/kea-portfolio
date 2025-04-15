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
  links: {
    github: string;
    domain: string;
    blogPost: string;
  };
}

export const projectsData: Project[] = [
  {
    projectId: 1,
    name: "개인 포트폴리오",
    type: "개인 프로젝트",
    duration: "2025.03 ~ ing",
    role: "1인 개발",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    description:
      "저의 개인 포트폴리오입니다. 자기소개와 제가 사용하는 기술 스택, 그리고 제가 참여했던 프로젝트에 대해 소개합니다.",
    skills: [
      {
        stack: "HTML",
        fontColor: "#E44D26",
      },
      {
        stack: "CSS",
        fontColor: "#663399",
      },
      {
        stack: "JavaScript",
        fontColor: "#F7DF1E",
      },
      {
        stack: "TypeScript",
        fontColor: "#007ACC",
      },
      {
        stack: "React",
        fontColor: "#61DAFB",
      },
      {
        stack: "Next.js",
        fontColor: "#000000",
      },
    ],
    features: ["구현 기능1", "구현 기능2"],
    links: {
      github: "깃헙 주소",
      domain: "도메인 주소",
      blogPost: "블로그 주소",
    },
  },
];
