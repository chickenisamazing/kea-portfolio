import supabase from "@/lib/supabase";

export default async function getToolsData() {
  const { data, error } = await supabase.from("tools").select();

  // 컬럼명이 다르니 매핑하자
  const mappedData = data?.map((item) => ({
    stack_id: item.tool_id,
    stack_name: item.tool_name,
    stack_image_url: item.tool_image_url,
    stack_color: item.tool_color,
    stack_description: [item.tool_description],
  }));

  return { mappedData, error };
}
