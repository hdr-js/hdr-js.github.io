import React from "react";
import { experience } from "../../data/portfolio";
import styles from "./CareerJourney.module.scss";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const CareerJourney: React.FC = () => (
  <div className={styles.wrap}>
    <div className={styles.eyebrow} data-reveal>
      <span className={styles.dot} />
      <span>02 — Experience</span>
    </div>

    <div className={styles.cards} data-reveal>
      {experience.map((job) => (
        <article key={`${job.company}-${job.shortDates}`} className={styles.card}>
          <div className={styles.cardTop}>
            <div>
              <p className={styles.company}>{job.company}</p>
              <h3 className={styles.role}>{job.role}</h3>
            </div>
            <span className={styles.dates}>{job.shortDates}</span>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Type</dt>
              <dd>{job.employmentType}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {job.location} · {job.workMode}
              </dd>
            </div>
          </dl>

          <div className={styles.section}>
            <div className={styles.label}>Tech stack</div>
            <div className={styles.chips}>
              {job.stack.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {job.links.length > 0 && (
            <div className={styles.section}>
              <div className={styles.label}>Links</div>
              <div className={styles.chips}>
                {job.links.map((link) => (
                  <a key={link.href} className={styles.linkChip} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  </div>
);

export default CareerJourney;
