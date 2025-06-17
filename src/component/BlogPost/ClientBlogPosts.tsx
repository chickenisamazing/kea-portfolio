import { useState, useEffect } from "react";
import Image from "next/image";

import { type BlogPost } from "../../types/blogPost";
import styles from "./ClientBlogPosts.module.css";

import { getBlogPostsByCategory } from "../../services/blog-client";

export default function ClientBlogPosts({ category }: { category: string }) {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [isHovered, setIsHovered] = useState<number>(0);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const { data, error } = await getBlogPostsByCategory(category);
        if (error) {
          console.error("에러 발생", error);
          return;
        }
        setPost(data || []);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    getBlogData();
  }, [category]);

  const handleMouseOver = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseOut = () => {
    setIsHovered(0);
  };

  if (!post || post.length === 0) {
    return null;
  }

  return (
    <div className={styles["stack-posting-container"]}>
      <div className={styles["thumbnail-container"]}>
        {post &&
          post.length > 0 &&
          post?.map((post: BlogPost) => (
            <div key={post?.post_id}>
              <a
                href={post.post_link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                    <p className={styles["link-text"]}>{post.post_title}</p>
                  </div>
                )}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
