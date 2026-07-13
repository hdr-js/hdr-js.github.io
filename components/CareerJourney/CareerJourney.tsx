import React, { useState } from "react";
import { experience } from "../../data/portfolio";
import styles from "./CareerJourney.module.scss";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const CareerJourney: React.FC = () => {
  const [sel, setSel] = useState(0);
  const job = experience[sel];

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow} data-reveal>
        <span className={styles.dot} />
        <span>02 — Career Journey</span>
      </div>

      <div className={styles.grid} data-reveal>
        <div className={styles.list}>
          {experience.map((e, i) => (
            <button
              key={e.company}
              type="button"
              className={styles.tab}
              data-active={i === sel}
              onClick={() => setSel(i)}
            >
              <span className={styles.tabName}>{e.company}</span>
              <span className={styles.tabDates}>{e.shortDates}</span>
            </button>
          ))}
        </div>

        <div className={styles.detail}>
          <h3 className={styles.role}>{job.role}</h3>
          <div className={styles.meta}>
            <span>{job.dates}</span>
            <span>·</span>
            <span>{job.location}</span>
          </div>
          <a
            className={styles.product}
            href={job.url}
            target={job.url === "#" ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {job.product}
            <ArrowUpRight />
          </a>
          <div className={styles.stack}>
            {job.stack.map((t) => (
              <span key={t} className={styles.chip}>
                {t}
              </span>
            ))}
          </div>
          <ul className={styles.bullets}>
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerJourney;
