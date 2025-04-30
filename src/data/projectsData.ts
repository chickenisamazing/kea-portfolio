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
    logo: "/assets/profile_image_penrose.svg",
    links: {
      github: "https://github.com/chickenisamazing/kea-portfolio",
      domain: "https://kea-portfolio.com/",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 2,
    name: "달칵",
    type: "팀 프로젝트(6인)",
    duration: "2024.02 ~ 2024.03 (6주)",
    role: "FE(팀원)",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    // description:
    //   "홈텐딩 유저들을 위한 칵테일 레시피 열람 및 커스텀 칵테일 레시피를 공유할 수 있는 서비스. 개인의 취향 또는 냉장고에 있는 재료를 기반으로 칵테일 레시피를 추천받을 수 있습니다.",
    description:
      "홈텐딩 유저들을 위한 칵테일 레시피 제공 및 커스텀 레시피 공유 서비스, 칵테일 추천을 받을 수 있습니다.",
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
        stack: "Zustand",
        fontColor: "#5C5149",
      },
    ],
    logo: "/assets/logos/others/domain_dalkak_logo.png",
    features: [
      "네비게이션 바",
      "칵테일 레시피 상세 조회",
      "커스텀 칵테일 레시피 리스트/페이지네이션",
      "커스텀 칵테일 레시피 상세 CRUD",
    ],
    links: {
      github: "https://github.com/chickenisamazing/DALKAK",
      domain: "https://kea-portfolio.com/",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 3,
    name: "아인",
    type: "팀 프로젝트(6인)",
    duration: "2024.03 ~ 2024.05 (6주)",
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
        stack: "Zustand",
        fontColor: "#5C5149",
      },
      {
        stack: "PWA",
        fontColor: "#5A0FC8",
      },
    ],
    features: [
      "카카오 소셜 로그인",
      "이상형 리스트 조회",
      "이상형 상세 모달 CRUD",
      "네비게이션 바",
    ],
    logo: "/assets/logos/others/domain_ain_logo.png",
    links: {
      github: "https://github.com/chickenisamazing/AIN",
      domain: "https://kea-portfolio.com/",
      blogPost: "블로그 주소",
    },
  },
  {
    projectId: 4,
    name: "모굴",
    type: "팀 프로젝트(6인)",
    duration: "2024.01 ~ 2024.02 (6주)",
    role: "FE(리드)",
    image: {
      src: "/assets/temp_browser_image.png",
      alt: "프로젝트 이미지",
    },
    description: "실시간 채팅이 가능한 웹툰 정보 모음 플랫폼",
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
      "회원 가입",
      "(마이페이지) 내 정보 조회/수정",
      "(마이페이지) 내 서재 리스트 조회",
      "(마이페이지) 내가 구독한 서재 리스트 조회",
      "(마이페이지) 내가 쓴 글 조회",
      "(마이페이지) 내가 쓴 댓글 조회",
      "인기 서재 리스트 조회",
      "내 서재 리스트 조회",
      "내 서재 리스트에서 서재 추가/이름 변경",
      "웹툰 검색 모달을 통한 내 서재에 웹툰 추가",
      "내 서재에서 웹툰 삭제",
      "타인의 서재 구독/구독 취소",
      "자유게시판 CRUD/페이지네이션",
      "댓글,대댓글 작성/삭제",
    ],
    logo: "/assets/logos/others/domain_mogul_logo.png",
    links: {
      github: "깃헙 주소",
      domain: "https://kea-portfolio.com/",
      blogPost: "블로그 주소",
    },
  },
];
