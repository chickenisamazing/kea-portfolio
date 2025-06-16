import Image from "next/image";

import { type BlogPost } from "@/types/blogPost";

import styles from "./BlogPosts.module.css";

import getBlogPostsData from "@/services/getBlogPostsData";

export default async function BlogPosts() {
  const { data } = await getBlogPostsData();

  if (!data) {
    return <div>블로그 포스트 데이터가 없습니다.</div>;
  }

  const groupedByCategory = data?.reduce(
    (acc: Record<string, BlogPost[]>, post) => {
      if (!acc[post.post_category]) {
        acc[post.post_category] = [];
      }
      acc[post.post_category].push(post);
      return acc;
    },
    {}
  );

  // console.log(groupedByCategory, "그룹");

  return (
    <div className={styles["stack-posting-container"]}>
      <p> 블로그 포스팅 클릭시 외부 링크(티스토리) 새창이 뜹니다.</p>

      {Object.entries(groupedByCategory).map(([category, posts]) => (
        <div key={category}>
          <h2 className={styles.category}>{category}</h2>
          <div className={styles["posts-container"]}>
            {posts?.map((post: BlogPost) => (
              <div key={post?.post_id}>
                <a
                  href={post.post_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.flex}
                >
                  <Image
                    src={post.post_thumbnail_image}
                    alt={post.post_title}
                    height={144}
                    width={144}
                  />
                  <div className={styles["explain-container"]}>
                    <p className={styles.title}>{post.post_title}</p>
                    <p className={styles.summary}>{post.post_summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
