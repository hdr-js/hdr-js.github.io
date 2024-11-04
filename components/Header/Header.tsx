import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

// Import SVGs
import ResumeIcon from "../../assets/icons/resume-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import GitHubIcon from "../../assets/icons/github-icon.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Header component displaying "Available for work" status,
 * social links, and contact information.
 *
 * @component
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.status}>
        <div className={styles.indicator}></div>
        Available for work!
      </div>
      <nav className={styles.nav}>
        <ThemeToggle value={theme} onChange={toggleTheme} />
        <Link href="/resume.pdf" target="_blank" aria-label="Resume">
          <ResumeIcon className={styles.icon} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hdr-js"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className={styles.icon} />
        </Link>
        <Link
          href="https://github.com/yourprofile"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHubIcon className={styles.icon} />
        </Link>
        <a href="mailto:hello@hdrjs.de" className={styles.email}>
          hello@hdrjs.de
        </a>
      </nav>
    </header>
  );
};
export default Header;
