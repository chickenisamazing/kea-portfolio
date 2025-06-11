"use client";

import { useState } from "react";
import Image from "next/image";

import type { Stack } from "@/types/stacks";
import styles from "./StacksContainer.module.css";

import StackDescription from "./StackDescription";

export default function StacksContainer({ data }: { data: Stack[] }) {
  const [selected, setSelected] = useState<string>(data[0]?.stack_name || "");

  const selectedStack = data.find(
    (stack: Stack) => stack.stack_name === selected
  );

  return (
    <div className={styles["logo-and-description"]}>
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
        <StackDescription
          color={selectedStack.stack_color}
          name={selectedStack.stack_name}
          description={selectedStack.stack_description}
        />
      )}
    </div>
  );
}
