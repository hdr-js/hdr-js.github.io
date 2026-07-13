import React from "react";
import { about } from "../../data/portfolio";
import styles from "./About.module.scss";

interface Props {
  active?: boolean;
}

const About: React.FC<Props> = ({ active = false }) => (
  <div className={styles.wrap}>
    <div className={styles.eyebrow} data-active={active} data-reveal>
      <span className={styles.dot} />
      <span>01 — About</span>
    </div>
    <div className={styles.grid}>
      <div data-reveal>
        <h2 className={styles.heading}>{about.heading}</h2>
        <p className={styles.lead}>{about.lead}</p>
        <p className={styles.body}>{about.body}</p>
      </div>
      <aside className={styles.side} data-reveal>
        <div>
          <div className={styles.label}>Location</div>
          <div className={styles.location}>{about.location}</div>
        </div>
        <div>
          <div className={styles.label}>Education</div>
          <div className={styles.value}>{about.education.degree}</div>
          <div className={styles.detail}>{about.education.detail}</div>
        </div>
      </aside>
    </div>
  </div>
);

export default About;
