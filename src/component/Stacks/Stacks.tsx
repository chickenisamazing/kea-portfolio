"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Stacks.module.css";

import type { Stack, StackProps } from "@/types/stacks";

export default function Stacks({ title, data }: StackProps) {
  const [selected, setSelected] = useState<string>(data[0]?.stack_name || "");

  const selectedStack = data.find(
    (stack: Stack) => stack.stack_name === selected
  );

  return (
    <section>
      <div className={styles.content}>
        <h2 id="skills-title" className={styles.title}>
          {title}
        </h2>
        <ul className={styles["logo-container"]}>
          {data.slice(0, 6).map((stack: Stack) => (
            <li key={stack.stack_id} className={styles["list-styling"]}>
              <button
                className={styles["btn-logo"]}
                type="button"
                aria-pressed={selected === stack.stack_name ? "true" : "false"}
                onClick={() => setSelected(stack.stack_name)}
              >
                <Image
                  className={`${styles["logo-icon"]} ${
                    selected === stack.stack_name ? styles.selected : ""
                  }`}
                  src={stack.stack_image_url}
                  alt={stack.stack_name}
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
              style={{ color: selectedStack.stack_color }}
              className={styles["selected-skill-name"]}
            >
              {selectedStack.stack_name}
            </span>
            {/* <ul className={styles["description-list"]}> */}
            <ul>
              {selectedStack.stack_description.map((sentence: string) => (
                <li key={sentence} className={styles.sentence}>
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
