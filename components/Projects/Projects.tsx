import React from "react";
import styles from "./Projects.module.scss";

interface Props {
  active?: boolean;
}

const projects = [
  { title: "Deutsch", href: "https://deutsch.hdrjs.de/", domain: "deutsch.hdrjs.de" },
];

const Projects: React.FC<Props> = ({ active = false }) => (
  <section className={styles.wrap} aria-labelledby="projects-heading">
    <div className={styles.eyebrow} data-active={active} data-reveal>
      <span className={styles.dot} />
      <span>04 — Projects</span>
    </div>
    <h2 id="projects-heading" className={styles.heading} data-reveal>Selected projects</h2>
    <div className={styles.grid} data-reveal>
      {projects.map((project) => (
        <a
          key={project.href}
          className={styles.card}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — visit project (opens in a new tab)`}
        >
          <div className={styles.preview} aria-hidden="true">
            <div className={styles.previewHeader}>
              <span className={styles.wordmark}>deutsch.</span>
              <span className={styles.menu}>☰</span>
            </div>
            <div className={styles.previewBody}>
              <span className={styles.kicker}>● Your word. Your starting point.</span>
              <span className={styles.previewHeading}>What does<br />this word mean?</span>
              <span className={styles.previewCopy}>Explore meanings, forms and grammar.</span>
              <div className={styles.search}>
                <span>⌕ &nbsp; e.g. getragen</span>
                <span className={styles.searchButton}>Search →</span>
              </div>
              <div className={styles.words}>
                <span>getragen</span><span>Häusern</span><span>ging</span><span>Band</span>
              </div>
            </div>
          </div>
          <span className={styles.domain}>{project.domain}</span>
          <h3>{project.title}</h3>
          <span className={styles.link}>Visit project <span aria-hidden="true">↗</span></span>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
