import supabase from "@/lib/supabase";

export default async function getSupabaseSkillsData() {
  const { data, error } = await supabase.from("stacks").select();
  return { data, error };
}
