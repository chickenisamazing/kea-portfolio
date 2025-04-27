"use client";

import { useState } from "react";
import Image from "next/image";
import { toolsData, type Tool } from "@/data/toolsData";

import styles from "./Tools.module.css";

export default function Tools() {
  const [selected, setSelected] = useState<string>(toolsData[0]?.name || "");

  const selectedTool = toolsData.find((tool: Tool) => tool.name === selected);

  return (
    <div>
      <div className={styles.content}>
        <h2 id="tools-title" className={styles.title}>
          Tools
        </h2>
        <div className={styles["logo-container"]}>
          {toolsData.map((tool: Tool) => (
            <button
              className={styles["btn-logo"]}
              type="button"
              key={tool.name}
              onClick={() => setSelected(tool.name)}
            >
              <Image
                className={`${styles["logo-icon"]} ${
                  selected === tool.name ? styles.selected : ""
                }`}
                src={tool.src}
                alt={tool.alt}
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>

        {selectedTool && (
          <div className={styles.description}>
            <span
              style={{ color: selectedTool.fontColor }}
              className={styles["selected-skill-name"]}
            >
              {selectedTool.name}
            </span>
            <ul className={styles["description-list"]}>
              {selectedTool.description.map(
                (sentence: string, index: number) => (
                  <li key={index} className={styles.sentence}>
                    {sentence}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
