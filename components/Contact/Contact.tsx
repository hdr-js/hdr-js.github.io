import React from "react";
import { languagesSpoken } from "../../data/portfolio";
import styles from "./Contact.module.scss";

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hdr-js" },
  { label: "GitHub", href: "https://github.com/hdr-js" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/8404234/haider-ali-anjum" },
];

interface Props {
  active?: boolean;
}

const Contact: React.FC<Props> = ({ active = false }) => (
  <div className={styles.wrap}>
    <div className={styles.inner}>
      <div className={styles.eyebrow} data-active={active} data-reveal>
        <span className={styles.dot} />
        <span>05 — Contact</span>
      </div>

      <div data-reveal>
        <div className={styles.tagline}>Available for work — let&apos;s build something.</div>
        <a className={styles.mail} href="mailto:hello@hdrjs.de">
          hello@hdrjs.de
        </a>
      </div>

      <div className={styles.chips} data-reveal>
        {links.map((l) => (
          <a key={l.label} className={styles.chip} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} <ArrowUpRight />
          </a>
        ))}
      </div>

      <div className={styles.speaks} data-reveal>
        <div className={styles.label}>Also speaks</div>
        <div className={styles.langs}>
          {languagesSpoken.map((l) => (
            <span key={l.name}>
              {l.name} <span className={styles.level}>· {l.level}</span>
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.footer}>
      <span>© 2026 Haider Ali Anjum</span>
      <span>Berlin, Germany</span>
    </div>
  </div>
);

export default Contact;
