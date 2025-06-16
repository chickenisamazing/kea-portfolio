import { useState, useEffect } from "react";
import Image from "next/image";

import { type BlogPost } from "../../types/blogPost";
import styles from "./BlogPosts.module.css";

import getClientBlogPostsData from "../../services/getClientBlogPostsData";

export default function ClientBlogPosts({ category }: { category: string }) {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [isHovered, setIsHovered] = useState<number>(0);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        // setIsLoading(true);
        const { data, error } = await getClientBlogPostsData(category);
        if (error) {
          console.error("에러 발생", error);
          return;
        }
        setPost(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        // setIsLoading(false);
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

  // if (isLoading) {
  //   return (
  //     <div className={styles["stack-posting-container"]}>
  //       <div className={styles["thumbnail-container"]}>
  //         {Array.from({ length: 5 }, (_, index) => (
  //           <div key={index} className={styles["thumbnail-skeleton"]}></div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles["stack-posting-container"]}>
      <div className={styles["thumbnail-container"]}>
        {post &&
          post.length > 0 &&
          post?.map((post: BlogPost) => (
            <div key={post?.post_id}>
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
            </div>
          ))}
      </div>
    </div>
  );
}
