"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Stacks.module.css";

export interface Stack {
  name: string;
  src: string;
  alt: string;
  fontColor: string;
  description: string[];
}

interface StackProps {
  data: Stack[];
}

export default function Stacks({ data }: StackProps) {
  const [selected, setSelected] = useState<string>(data[0]?.name || "");

  const selectedStack = data.find((stack: Stack) => stack.name === selected);

  return (
    <div>
      <div className={styles.content}>
        <h2 id="skills-title" className={styles.title}>
          Skills
        </h2>
        <ul className={styles["logo-container"]} role="list">
          {data.map((stack: Stack) => (
            <li key={stack.name} className={styles["list-styling"]}>
              <button
                className={styles["btn-logo"]}
                type="button"
                aria-pressed={selected === stack.name ? "true" : "false"}
                onClick={() => setSelected(stack.name)}
              >
                <Image
                  className={`${styles["logo-icon"]} ${
                    selected === stack.name ? styles.selected : ""
                  }`}
                  src={stack.src}
                  alt={stack.alt}
                  width={64}
                  height={64}
                />
              </button>
            </li>
          ))}
        </ul>

        {selectedStack && (
          <div className={styles.description}>
            <span
              style={{ color: selectedStack.fontColor }}
              className={styles["selected-skill-name"]}
            >
              {selectedStack.name}
            </span>
            <ul className={styles["description-list"]}>
              {selectedStack.description.map((sentence: string) => (
                <li key={sentence} className={styles.sentence}>
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
