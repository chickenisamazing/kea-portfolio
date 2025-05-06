export interface Stack {
  // name: string;
  // src: string;
  // alt: string;
  // fontColor: string;
  // description: string[];
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
