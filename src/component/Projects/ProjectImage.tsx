import Image from "next/image";

import styles from "./ProjectImage.module.css";

export default function ProjectImage({ image }: { image: string }) {
  return (
    <Image
      className={styles["project-image"]}
      src={image}
      alt="프로젝트 이미지"
      width={700}
      height={350}
    />
  );
}
