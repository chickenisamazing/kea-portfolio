import supabase from "@/lib/supabase";

export default async function getAllSupabaseProjectData() {
  // const { data, error } = await supabase.from("projects").select();
  const { data, error } = await supabase
    .from("project_with_stacks")
    .select("*");
  return { data, error };
}
