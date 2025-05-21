import supabase from "@/lib/supabase";

export default async function getOneProjectData(projectId: number) {
  const { data, error } = await supabase
    .from("project_with_stacks")
    .select("*")
    .eq("project_id", projectId)
    .single();

  return { data, error };
}
