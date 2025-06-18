import ScrollToTop from "@/component/scroll/ScrollToTop";
import OneProject from "@/component/OneProject/OneProject";

import { getAllProject, getOneProjectById } from "@/services/project";

export async function generateStaticParams() {
  const { data: projectListData } = await getAllProject();

  return (
    projectListData?.map((post) => ({
      id: String(post.project_id),
    })) || []
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  // parseInt는 동기함수
  const id = parseInt(resolvedParams.id);
  const { data: projectData, error } = await getOneProjectById(id);

  if (error || !projectData) {
    console.error("에러 발생", error);
    return (
      <div>프로젝트 데이터를 불러오는데 실패했거나 데이터가 없습니다.</div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <OneProject data={projectData} />
    </div>
  );
}
