import supabase from "@/lib/supabase";

export default async function getSkillsData() {
  const { data, error } = await supabase.from("stacks").select();
  return { data, error };
}
