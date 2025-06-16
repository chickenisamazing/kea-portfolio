import BlogPosts from "@/component/BlogPost/BlogPosts";
import { Modal } from "./modal";

export default function page() {
  return (
    <Modal>
      <BlogPosts />
    </Modal>
  );
}
