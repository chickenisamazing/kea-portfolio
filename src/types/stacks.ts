export interface Stack {
  name: string;
  src: string;
  alt: string;
  fontColor: string;
  description: string[];
}

export interface StackProps {
  title: string;
  data: Stack[];
}
