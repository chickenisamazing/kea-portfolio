import Image from "next/image";

import { type BlogPost } from "@/types/blogPost";

import styles from "./BlogPosts.module.css";

import getBlogPostsData from "@/services/getBlogPostsData";

export default async function BlogPosts() {
  const { data } = await getBlogPostsData();

  return (
    <div className={styles["stack-posting-container"]}>
      <p> 블로그 포스팅입니다.</p>

      {data?.map((post: BlogPost) => (
        <div key={post?.post_id}>
          <Image
            src={post.post_thumbnail_image}
            alt={post.post_title}
            height={144}
            width={144}
          />
        </div>
      ))}
    </div>
  );
}
