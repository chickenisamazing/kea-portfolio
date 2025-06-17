import supabaseClient from "@/lib/supabaseClient";

export async function getBlogPostsByCategory(category: string) {
  const { data, error } = await supabaseClient
    .from("blog_posts")
    .select()
    .eq("post_category", category);
  return { data, error };
}
