import supabaseClient from "@/lib/supabaseClient";

export default async function getClientBlogPostsData(category: string) {
  const { data, error } = await supabaseClient
    .from("blog_posts")
    .select()
    .eq("post_category", category);
  // console.log(data);
  return { data, error };
}
