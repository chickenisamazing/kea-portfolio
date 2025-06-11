import styles from "./StackDescription.module.css";

interface Props {
  color: string;
  name: string;
  description: string[];
}

export default function StackDescription({ color, name, description }: Props) {
  return (
    <div className={styles.description}>
      <span style={{ color: color }} className={styles["selected-skill-name"]}>
        {name}
      </span>
      <ul>
        {description.map((sentence: string) => (
          <li key={sentence} className={styles.sentence}>
            {sentence}
          </li>
        ))}
      </ul>
    </div>
  );
}
