import supabase from "@/lib/supabase";

// 모든 프로젝트 데이터
export async function getAllProject() {
  const { data, error } = await supabase
    .from("project_with_stacks")
    .select("*");
  return { data, error };
}

// 하나의 프로젝트 데이터
export async function getOneProjectById(projectId: number) {
  const { data, error } = await supabase
    .from("project_with_stacks")
    .select("*")
    .eq("project_id", projectId)
    .single();
  return { data, error };
}
