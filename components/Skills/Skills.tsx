import React from "react";
import { skills } from "../../data/portfolio";
import styles from "./Skills.module.scss";

const Skills: React.FC = () => (
  <div className={styles.wrap}>
    <div className={styles.eyebrow} data-reveal>
      <span className={styles.dot} />
      <span>03 — Skills &amp; Expertise</span>
    </div>
    <div className={styles.grid} data-reveal>
      {skills.map((group) => (
        <div key={group.title} className={styles.card}>
          <div className={styles.cardTitle} style={{ color: group.color }}>
            {group.title}
          </div>
          <ul className={styles.items}>
            {group.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
