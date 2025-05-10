// GenerateStaticParams 사용 + force-dynamic 사용
/// (예상 결과)
// 로컬 개발 환경 - SSR과 유사 (o)
// 배포 환경 - SSR

// 동적 렌더링 강제
export const dynamic = "force-dynamic";

import getSupabaseProjectData from "@/services/getSupabaseProjectData";

import getOneSupabaseProjectData from "@/services/getOneSupabaseProjectData";
import OneProject from "@/component/OneProject/OneProject";

// import type { Project } from "@/types/project";

// 서버 컴포넌트 다이나믹 라우팅에서는 디폴트가 설마 SSR인가? SSG를 하려면..
export async function generateStaticParams() {
  const { data: projectListData } = await getSupabaseProjectData();

  return (
    projectListData?.map((post) => ({
      id: String(post.project_id),
    })) || []
  );

  // const { data: projectData, error } = await getOneSupabaseProjectData(id);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  // parseInt는 동기함수
  const id = parseInt(resolvedParams.id);

  // console.log("resolvedParams :", resolvedParams);
  // console.log("resolvedParams.id :", resolvedParams.id);
  // console.log("id :", id);

  const currentTime = new Date().toISOString();

  const { data: projectData, error } = await getOneSupabaseProjectData(id);

  if (error || !projectData) {
    console.error("에러 발생", error);
    return (
      <div>프로젝트 데이터를 불러오는데 실패했거나 데이터가 없습니다.</div>
    );
  }

  return (
    <div>
      <p>GenerateStaticParams 사용 + force-dynamic 사용</p>
      <p>이 페이지는 {currentTime}에 생성되었습니다. </p>
      <OneProject {...projectData} />
    </div>
  );
}
