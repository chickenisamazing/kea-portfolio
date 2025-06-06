import getAllProjectData from "@/services/getAllProjectData";
import getOneProjectData from "@/services/getOneProjectData";
import OneProject from "@/component/OneProject/OneProject";

import { Modal } from "./modal";

export const revalidate = 20;

export async function generateStaticParams() {
  const { data: projectListData } = await getAllProjectData();

  return (
    projectListData?.map((post) => ({
      id: String(post.project_id),
    })) || []
  );
}

export default async function ProjectModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  // parseInt는 동기함수
  const id = parseInt(resolvedParams.id);
  const { data: projectData, error } = await getOneProjectData(id);

  if (error || !projectData) {
    console.error("에러 발생", error);
    return (
      <div>프로젝트 데이터를 불러오는데 실패했거나 데이터가 없습니다.</div>
    );
  }

  return (
    <Modal>
      <OneProject data={projectData} />
    </Modal>
  );
}
