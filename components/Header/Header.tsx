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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Haider_Ali_Anjum.pdf";
    link.download = "Resume_Haider_Ali_Anjum.pdf";
    link.click();
  };

  return (
    <header className={styles.header}>
      <div className={styles.status}>
        <div className={styles.indicator}></div>
        Available for work!
      </div>
      <nav className={styles.nav}>
        <ThemeToggle value={theme} onChange={toggleTheme} />
        <button onClick={handleDownload} className={styles.downloadButton}>
          <ResumeIcon className={styles.icon} />
        </button>
        <Link
          href="https://www.linkedin.com/in/hdr-js"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className={styles.icon} />
        </Link>
        <Link
          href="https://github.com/hdr-js"
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
