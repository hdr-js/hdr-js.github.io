import React from "react";
import { experience } from "../../data/portfolio";
import styles from "./CareerJourney.module.scss";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

interface Props {
  active?: boolean;
}

const CareerJourney: React.FC<Props> = ({ active = false }) => {
  const locationCodes: Record<string, string> = {
    Germany: "DE",
    "United States": "US",
    Pakistan: "PK",
    Australia: "AU",
  };

  const twoDigitYear = (value: string) =>
    value
      .replace(/\b(20\d{2})\b/g, (_, year) => `'${String(year).slice(-2)}`)
      .replace(/\s+—\s+/g, " - ")
      .replace("Present", "Now");

  const getTimelineLabel = (shortDates: string, index: number) => {
    return twoDigitYear(shortDates.split("—")[0]?.trim() || shortDates);
  };

  const getDateRange = (dates: string) => {
    return twoDigitYear(dates);
  };

  const getLocation = (location: string) => {
    const [city, country] = location.split(",").map((part) => part.trim());
    return [city, locationCodes[country] || country].filter(Boolean).join(", ");
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow} data-active={active} data-reveal>
        <span className={styles.dot} />
        <span>02 — Career Journey</span>
      </div>

      <div className={styles.grid} data-reveal>
        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <article className={styles.item} key={`${job.company}-${job.shortDates}`}>
              <div className={styles.year}>{getTimelineLabel(job.shortDates, index)}</div>
              <div className={styles.marker} data-current={index === 0}>
                <span className={styles.pin} />
              </div>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  {job.url && job.url !== "#" ? (
                    <a className={styles.company} href={job.url} target="_blank" rel="noopener noreferrer">
                      <span>{job.company}</span>
                      <ArrowUpRight />
                    </a>
                  ) : (
                    <div className={styles.company}>{job.company}</div>
                  )}
                  <span className={styles.range}>{getDateRange(job.dates)}</span>
                </div>
                <div className={styles.role}>{job.role}</div>
                <div className={styles.meta}>{getLocation(job.location)}</div>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.stats} aria-label="Career stats">
          <div>
            <span className={styles.statValue}>10</span>
            <span className={styles.statLabel}>years of experience</span>
          </div>
          <div>
            <span className={styles.statValue}>50+</span>
            <span className={styles.statLabel}>projects shipped</span>
          </div>
          <div>
            <span className={styles.statValue}>1700+</span>
            <span className={styles.statLabel}>code contributions per year</span>
          </div>
          <div>
            <span className={styles.statValue}>20+</span>
            <span className={styles.statLabel}>product domains</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CareerJourney;
