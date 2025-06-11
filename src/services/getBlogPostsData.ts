import supabase from "@/lib/supabase";

export default async function getBlogPostsData() {
  const { data, error } = await supabase.from("blog_posts").select();
  return { data, error };
}
