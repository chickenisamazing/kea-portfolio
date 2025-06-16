import { useState, useEffect } from "react";

import Image from "next/image";

import { type BlogPost } from "../../types/blogPost";

import styles from "./BlogPosts.module.css";

import getClientBlogPostsData from "../../services/getClientBlogPostsData";
// import BlogPostFallback from "../BlogPost/BlogPostFallback";

export default function ClientBlogPosts({ category }: { category: string }) {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [isHovered, setIsHovered] = useState<number>(0);

  useEffect(() => {
    const getBlogData = async () => {
      const { data, error } = await getClientBlogPostsData(category);
      if (error) {
        console.error("에러 발생", error);
        return;
      }
      setPost(data || []);
    };
    getBlogData();
  }, []);

  const handleMouseOver = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseOut = () => {
    setIsHovered(0);
  };

  return (
    <div className={styles["stack-posting-container"]}>
      <div className={styles["thumbnail-container"]}>
        {post &&
          post?.map((post: BlogPost) => (
            <div key={post?.post_id}>
              {/* <Suspense fallback={<BlogPostFallback />}> */}

              {isHovered !== post.post_id ? (
                <Image
                  className={styles["thumbnail-image"]}
                  src={post.post_thumbnail_image}
                  alt={post.post_title}
                  height={140}
                  width={140}
                  onMouseOver={() => handleMouseOver(post.post_id)}
                  onMouseOut={() => handleMouseOut()}
                />
              ) : (
                <div
                  className={styles["thumbnail-hover"]}
                  onMouseOver={() => handleMouseOver(post.post_id)}
                  onMouseOut={() => handleMouseOut()}
                >
                  {post.post_title}
                </div>
              )}

              {/* <Image
                className={styles["thumbnail-image"]}
                src={post.post_thumbnail_image}
                alt={post.post_title}
                height={140}
                width={140}
                onMouseOver={() => handleMouseOver(post.post_id)}
                onMouseOut={() => handleMouseOut()}
              /> */}
              {/* </Suspense> */}
            </div>
          ))}
      </div>
    </div>
  );
}
