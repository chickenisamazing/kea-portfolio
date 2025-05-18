import getAllSupabaseProjectData from "@/services/getAllSupabaseProjectData";
import getOneSupabaseProjectData from "@/services/getOneSupabaseProjectData";
// import OneProject from "@/component/OneProject/OneProject";
import OneProject from "@/component/OneProject/OneProject";

export async function generateStaticParams() {
  const { data: projectListData } = await getAllSupabaseProjectData();

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
      <p>GenerateStaticParams 사용 + force-dynamic 미사용</p>
      <p>이 페이지는 {currentTime}에 생성되었습니다. </p>
      {/* <OneProject {...projectData} /> */}
      <OneProject data={projectData} />
    </div>
  );
}
