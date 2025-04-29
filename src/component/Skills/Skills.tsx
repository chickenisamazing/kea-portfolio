"use client";

import { useState } from "react";
import Image from "next/image";
import { skillsData, type Skill } from "@/data/skillsData";

import styles from "./Skills.module.css";

export default function Skills() {
  const [selected, setSelected] = useState<string>(skillsData[0]?.name || "");

  const selectedSkill = skillsData.find(
    (skill: Skill) => skill.name === selected
  );

  return (
    <div>
      <div className={styles.content}>
        <h2 id="skills-title" className={styles.title}>
          Skills
        </h2>
        <div className={styles["logo-container"]}>
          {skillsData.map((skill: Skill) => (
            <button
              className={styles["btn-logo"]}
              type="button"
              key={skill.name}
              onClick={() => setSelected(skill.name)}
            >
              <Image
                className={`${styles["logo-icon"]} ${
                  selected === skill.name ? styles.selected : ""
                }`}
                src={skill.src}
                alt={skill.alt}
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>

        {selectedSkill && (
          <div className={styles.description}>
            <span
              style={{ color: selectedSkill.fontColor }}
              className={styles["selected-skill-name"]}
            >
              {selectedSkill.name}
            </span>
            <ul className={styles["description-list"]}>
              {selectedSkill.description.map((sentence: string) => (
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
