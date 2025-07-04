export interface Stack {
  stack_id: number;
  stack_name: string;
  stack_image_url: string;
  stack_category: string;
  stack_color: string;
  stack_description: string[];
}

export interface StackProps {
  title: string;
  data: Stack[];
}
