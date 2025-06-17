import supabase from "@/lib/supabase";

export async function getBlogPosts() {
  const { data, error } = await supabase.from("blog_posts").select();
  return { data, error };
}
