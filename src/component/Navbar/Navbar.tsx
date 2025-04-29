"use client";
import { useState, useEffect, useRef, useCallback } from "react";

import styles from "./Navbar.module.css";

const SECTION_ID_ARRAY = ["about-me-title", "skills-title", "projects-title"];
const THROTTLE_WAIT_MS = 150;
const SCROLL_ANIMATION_DURATION = 700;

export default function Navbar() {
  // 상태가 변경되면 리렌더링
  const [scrollLocation, setScrollLocation] =
    useState<string>("about-me-title");
  // 각 섹션의 Y축 위치(offsetTop)을 저장할 Ref 객체
  const sectionTops = useRef<Record<string, number>>({});

  // 스크롤 이벤트 쓰로틀링을 위한 setTomeout의 타이머 ID 저장
  const scrollThrottleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // 리사이즈 이벤트 쓰로틀링을 위한 setTomeout의 타이머 ID 저장
  const resizeThrottleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 카테고리 버튼 클릭 후 스크롤 애니메이션 동안 스크롤 이벤트를 무시할 시점
  const ignoreScrollUntilRef = useRef<number>(0);

  // 3개 섹션들의 초기 Y값 계산 및 저장
  const calculateSectionTops = useCallback(() => {
    // 계산된 위치 임시 저장
    const newTops: Record<string, number> = {};
    // 위치값이 변경되었는지 여부
    let changed = false;

    // 섹션 ID 배열 순회
    SECTION_ID_ARRAY.forEach((id) => {
      // 각 ID에 해당하는 DOM 요소 찾기
      const element = document.getElementById(id);
      // 요소가 존재하면
      if (element) {
        // 그 요소의 offsetTop(Y축 위치) 값을 가져온다
        const offsetTop = element.offsetTop;
        // 그 값이 이전에 저장된 값과 다르면 change를 true로 변경
        if (sectionTops.current[id] !== offsetTop) {
          changed = true;
        }
        // 새로운 위치값을 임시 객체에 저장
        newTops[id] = offsetTop;
      }
    });

    // 위치값이 변경(changed===true)되었거나 아무런 위치값도 sectionTops에 저장되지 않았다면
    if (changed || Object.keys(sectionTops.current).length === 0) {
      // 새 위치값을 sectionTops의 current 속성에 저장한다. 리렌더링 발생x
      sectionTops.current = newTops;
      console.log("체크", sectionTops.current);
    }
  }, []);

  // 스크롤 이벤트가 발생했을 때 -> 스크롤 할 때마다 끝없이 작동?
  const handleScroll = useCallback(() => {
    // 현재 스크롤의 Y축 위치를 가져온다
    const currentScrollY = window.scrollY;
    // 섹션 상단이 화면 상단에서 아래로 1/3지점 내려왔을 때 활성화
    const activePoint = currentScrollY + window.innerHeight / 3;
    // 기본 활성 섹션은 첫 번째 섹션
    let activeSection = SECTION_ID_ARRAY[0];

    // 섹션 ID 배열을 역순으로 순회
    for (let i = SECTION_ID_ARRAY.length - 1; i >= 0; i--) {
      const id = SECTION_ID_ARRAY[i];
      // 해당 섹션의 저장된 Y 위치값 가져오기
      const sectionTop = sectionTops.current[id];
      // 위치값이 존재하고 활성 기준점이 섹션의 Y 위치값보다 크거나 같다면
      if (sectionTop !== undefined && activePoint >= sectionTop) {
        // 이 섹션은 현재 활성 섹션으로 간주
        activeSection = id;
        break;
      }
    }
    setScrollLocation(activeSection);
  }, []);

  // 스크롤 이벤트를 쓰로틀링하여 handleScroll 함수를 제어하는 래퍼(wrapper) 함수
  const throttledScrollHandler = useCallback(() => {
    // 버튼 클릭 후 설정된 "무시 시점"이전이면 스크롤 이벤트를 처리하지 않고 반환
    if (Date.now() < ignoreScrollUntilRef.current) {
      console.log("무시");
      return;
    }

    // 쓰로틀링 타이머가 실행 중이라면 아무것도 하지 않고 반환
    if (scrollThrottleTimeoutRef.current) {
      return;
    }

    // 타이머가 없다면 실제 스크롤 처리 로직(handleScroll) 실행
    handleScroll();
    // 타이머 설정. 150ms 후에 Ref 값을 null로 되돌려 다음 호출이 가능하게 한다
    scrollThrottleTimeoutRef.current = setTimeout(() => {
      scrollThrottleTimeoutRef.current = null;
    }, THROTTLE_WAIT_MS);
    // handledScroll 함수가 변경될 때만 이 함수를 재생성한다
  }, [handleScroll]);

  // 창 크기 변경 이벤트를 쓰로틀링하여 calculateSectionTops 함수를 제어하는 래퍼(wrapper) 함수
  const throttledResizeHandler = useCallback(() => {
    // 쓰로틀링 타이머가 실행 중이라면 아무것도 하지 않고 반환
    if (resizeThrottleTimeoutRef.current) return;

    // 타이머가 없다면 실제 섹션 위치 계산 로직(calculateSectionTops) 실행
    calculateSectionTops();

    // 타이머 설정. 스크롤보다 덜 민감하게 더 긴 시간으로
    resizeThrottleTimeoutRef.current = setTimeout(() => {
      resizeThrottleTimeoutRef.current = null;
    }, THROTTLE_WAIT_MS * 2);
    // calculateSectionTops 함수가 변경될 때만 이 함수 재생성
  }, [calculateSectionTops]);

  useEffect(() => {
    // 이 컴포넌트가 마운트 될 때 3개의 섹션 Y값 계산
    calculateSectionTops();

    // 스크롤 시 throttledScrollhandler 호출
    window.addEventListener("scroll", throttledScrollHandler);
    // 창 크기 변경 시 throttledResizeHandler 호출
    window.addEventListener("resize", throttledResizeHandler);

    // useEffect의 cleanup 함수. 컴포넌트가 언마운트 될 때 실행
    // 등록했던 이벤트 리스너를 제거하고, 혹시 남아있을 수 있는 타이머 정리
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("resize", throttledResizeHandler);

      // 스크롤 쓰로틀링 타이머가 남아있다면
      if (scrollThrottleTimeoutRef.current) {
        // 타이머 취소 (메모리 누수 및 오류 방지)
        clearTimeout(scrollThrottleTimeoutRef.current);
      }
      // 리사이즈 쓰로틀링 타이머가 남아있다면
      if (resizeThrottleTimeoutRef.current) {
        // 타이머 취소 (메모리 누수 및 오류 방지)
        clearTimeout(resizeThrottleTimeoutRef.current);
      }
    };
    // 이 의존성 배열에 포함된 값들이 변경될 때만 다시 실행된다.
    // useCallback으로 메모이즈된 함수들은 참조가 안정적이므로 불필요한 재실행을 방지
    // calculateSectionTops는 초기 실행 컨텐스트를 위해 포함
  }, [throttledResizeHandler, throttledScrollHandler, calculateSectionTops]);

  // 내비게이션 바 버튼 클릭시 해당 섹션으로 이동
  function scrollToSection(targetId: string) {
    // 해당 섹션 ID로 즉시 상태 업데이트
    setScrollLocation(targetId);
    // 현재 시각에 애니메이션 예상 기각을 더하여 이 시점까지 스크롤 이벤트 무시
    ignoreScrollUntilRef.current = Date.now() + SCROLL_ANIMATION_DURATION;
    // 만약 getElementById의 결과가 null이면 무시. 아니면 부드럽게 스크롤 이벤트
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <button
          type="button"
          onClick={() => scrollToSection("about-me-title")}
          className={`${
            scrollLocation === "about-me-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
          aria-current={
            scrollLocation === "about-me-title" ? "location" : undefined
          }
        >
          About Me
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("skills-title")}
          className={` ${
            scrollLocation === "skills-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
          aria-current={
            scrollLocation === "skills-title" ? "location" : undefined
          }
        >
          Skills
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("projects-title")}
          className={`${
            scrollLocation === "projects-title"
              ? styles["active-navbar"]
              : styles["inactive-navbar"]
          }`}
          aria-current={
            scrollLocation === "projects-title" ? "location" : undefined
          }
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
