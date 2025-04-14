export interface Skill {
  name: string;
  src: string;
  alt: string;
  fontColor: string;
  description: string[];
}

export const skillsData: Skill[] = [
  {
    name: "HTML",
    src: "/assets/logos/HTML_logo.svg",
    alt: "HTML logo",
    fontColor: "#E44D26",
    description: [
      "· 시맨틱 태그를 사용한 웹페이지 구조화가 가능합니다.",
      "· 웹 표준과 웹 접근성 지침을 고려하여 마크업을 작성합니다.",
      "· 폼(Form) 요소를 활용하여 사용자 입력을 처리합니다.",
    ],
  },
  {
    name: "CSS",
    src: "/assets/logos/CSS_logo.svg",
    alt: "CSS logo",
    fontColor: "#663399",
    description: [
      "· CSS Modules를 사용해본 경험이 있습니다.",
      "· Tailwind CSS를 사용해본 경험이 있습니다.",
      "· Flexbox와 Grid를 활용하여 웹 페이지의 기본 레이아웃 구조를 설계합니다.",
      "· Emotion 등 CSS-in-JS 라이브러리 사용 경험이 있습니다.",
      "· 미디어 쿼리(@media)를 사용하여 다양한 화면 크기에 대응할 수 있는 반응형 웹을 구현합니다.",
    ],
  },
  {
    name: "JavaScript",
    src: "/assets/logos/JavaScript_logo.svg",
    alt: "JavaScript logo",
    fontColor: "#F7DF1E",
    description: [
      "· ES6+ 문법을 사용합니다.",
      "· 이벤트 처리.",
      "· Promise, async/await를 이용한 비동기 작업 처리가 가능합니다.",
      "· Fetch API와 Axios를 사용하여 서버와의 데이터 통신이 가능합니다.",
    ],
  },
  {
    name: "TypeScript",
    src: "/assets/logos/TypeScript_logo.svg",
    alt: "TypeScript logo",
    fontColor: "#007ACC",
    description: [
      "· 타입 안정성 확보를 위해 타입스크립트를 사용합니다.",
      "· Interface를 사용하여 데이터의 타입을 정의합니다.",
      "· string, number, boolean, 배열 등의 데이터 타입을 이해하고 적절한 타입 선언에 활용합니다..",
    ],
  },
  {
    name: "React",
    src: "/assets/logos/React_logo.svg",
    alt: "React logo",
    fontColor: "#61DAFB",
    description: [
      "· 재사용을 고려한 컴포넌트 기반 UI개발을 지향합니다.",
      "· zustand와 같은 상태관리 라이브러리를 사용할 수 있습니다.",
      "· 기본적인 리액트 훅을 활용할 수 있습니다.",
      "· 리액트 컴포넌트의 생명 주기에 대해 이해합니다.",
      "· Props를 통해 부모-자식 간 데이터를 전달합니다.",
    ],
  },
  {
    name: "Next.js",
    src: "/assets/logos/Next_js_logo.svg",
    alt: "Next.js logo",
    fontColor: "#000000",
    description: [
      "· App Router 기반의 Next.js 팀 프로젝트 경험이 3 번있습니다.",
      "· Hydration이라는 개념을 이해합니다.",
      "· 클라이언트 컴포넌트와 서버 컴포넌트의 특성을 고려하여 분리설계합니다.",
      "· API Routes를 통한 백엔드 통신을 구현합니다.",
      "· Next.js의 SSR, SSG, ISR 등의 다양한 렌더링 방법을 활용합니다.",
    ],
  },
];
