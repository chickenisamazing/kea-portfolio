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
      "저의 개인 포트폴리오입니다. 자기소개와 제가 사용하는 기술 스택 그리고 제가 참여했던 프로젝트에 대해 소개합니다.",
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
        stack: "CSS Modules",
        fontColor: "#017671",
      },
      // {
      //   stack: "JavaScript",
      //   fontColor: "#F7DF1E",
      // },
      {
        stack: "TypeScript",
        fontColor: "#3178C6",
      },
      {
        stack: "React",
        fontColor: "#61DAFB",
      },
      {
        stack: "Next.js App Router",
        fontColor: "#000000",
      },
    ],
    features: ["소개 페이지 구현", "사용자 인터렉션 요소 구현"],
    links: {
      github: "깃헙 주소",
      domain: "도메인 주소",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 2,
    name: "달칵",
    type: "팀 프로젝트(6인)",
    duration: "2025.03 ~ ing",
    role: "FE(팀원)",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    description:
      "홈텐딩 유저들을 위한 칵테일 레시피 열람 및 커스텀 칵테일 레시피를 공유할 수 있는 서비스. 개인의 취향 또는 냉장고에 있는 재료를 기반으로 칵테일 레시피를 추천받을 수 있습니다.",
    skills: [
      {
        stack: "HTML",
        fontColor: "#E34F26",
      },
      {
        stack: "CSS",
        fontColor: "#663399",
      },
      {
        stack: "CSS Modules",
        fontColor: "#017671",
      },
      // {
      //   stack: "JavaScript",
      //   fontColor: "#F7DF1E",
      // },
      {
        stack: "TypeScript",
        fontColor: "#3178C6",
      },
      {
        stack: "React",
        fontColor: "#61DAFB",
      },
      {
        stack: "Next.js App Router",
        fontColor: "#000000",
      },
      {
        stack: "zustand",
        fontColor: "#5C5149",
      },
    ],
    features: [
      "네비게이션 바",
      "칵테일 레시피 상세 조회",
      "커스텀 칵테일 레시피 리스트 조회 및 페이지네이션",
      "커스텀 칵테일 레시피 상세 조회/등록/수정/삭제",
    ],
    links: {
      github: "깃헙 주소",
      domain: "도메인 주소",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 3,
    name: "아인",
    type: "팀 프로젝트(6인)",
    duration: "2025.03 ~ ing",
    role: "FE(리드)",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    description:
      "사용자 취향에 맞는 이상형을 생성하고 생성한 이상형과 대화를 나눌 수 있는 서비스.",
    skills: [
      {
        stack: "HTML",
        fontColor: "#E34F26",
      },
      {
        stack: "CSS",
        fontColor: "#663399",
      },
      {
        stack: "Tailwind CSS",
        fontColor: "#06B6D4",
      },
      // {
      //   stack: "JavaScript",
      //   fontColor: "#F7DF1E",
      // },
      {
        stack: "TypeScript",
        fontColor: "#3178C6",
      },
      {
        stack: "React",
        fontColor: "#61DAFB",
      },
      {
        stack: "Next.js App Router",
        fontColor: "#000000",
      },
      {
        stack: "zustand",
        fontColor: "#5C5149",
      },
      {
        stack: "PWA",
        fontColor: "#5A0FC8",
      },
    ],
    features: [
      "네비게이션 바",
      "칵테일 레시피 상세 조회",
      "커스텀 칵테일 레시피 리스트 조회 및 페이지네이션",
      "커스텀 칵테일 레시피 상세 조회/등록/수정/삭제",
    ],
    links: {
      github: "깃헙 주소",
      domain: "도메인 주소",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 4,
    name: "모굴",
    type: "팀 프로젝트(6인)",
    duration: "2025.03 ~ ing",
    role: "FE(리드)",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    description:
      "홈텐딩 유저들을 위한 칵테일 레시피 열람 및 커스텀 칵테일 레시피를 공유할 수 있는 서비스. 개인의 취향 또는 냉장고에 있는 재료를 기반으로 칵테일 레시피를 추천받을 수 있습니다.",
    skills: [
      {
        stack: "HTML",
        fontColor: "#E34F26",
      },
      {
        stack: "CSS",
        fontColor: "#663399",
      },
      {
        stack: "Tailwind CSS",
        fontColor: "#06B6D4",
      },
      {
        stack: "JavaScript",
        fontColor: "#F7DF1E",
      },
      {
        stack: "React",
        fontColor: "#61DAFB",
      },
      {
        stack: "Next.js App Router",
        fontColor: "#000000",
      },
    ],
    features: [
      "네비게이션 바",
      "칵테일 레시피 상세 조회",
      "커스텀 칵테일 레시피 리스트 조회 및 페이지네이션",
      "커스텀 칵테일 레시피 상세 조회/등록/수정/삭제",
    ],
    links: {
      github: "깃헙 주소",
      domain: "도메인 주소",
      blogPost: "블로그 주소",
    },
  },
];
