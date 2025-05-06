import supabase from "@/lib/supabase";

export default async function getSupabaseProjectData() {
  const { data, error } = await supabase.from("projects").select();
  return { data, error };
}
