import styles from "./StackDescription.module.css";

interface Props {
  color: string;
  name: string;
  description: string[];
  title: string;
}

export default function StackDescription({ color, name, description }: Props) {
  return (
    <div className={styles.description}>
      <div className={styles.between}>
        <span
          style={{ color: color }}
          className={styles["selected-skill-name"]}
        >
          {name}
        </span>
      </div>
      <ul className={styles["sentence-list"]}>
        {description.map((sentence: string) => (
          <li key={sentence} className={styles.sentence}>
            · {sentence}
          </li>
        ))}
      </ul>
    </div>
  );
}
