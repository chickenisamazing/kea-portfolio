export const dynamic = "force-dynamic";

import getOneSupabaseProjectData from "@/services/getOneSupabaseProjectData";
import OneProject from "@/component/OneProject/OneProject";

// import type { Project } from "@/types/project";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const { data: projectData, error } = await getOneSupabaseProjectData(id);

  if (error || !projectData) {
    console.error("에러 발생", error);
    return (
      <div>프로젝트 데이터를 불러오는데 실패했거나 데이터가 없습니다.</div>
    );
  }

  return (
    <div>
      <OneProject {...projectData} />
    </div>
  );
}
