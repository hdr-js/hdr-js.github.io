import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import GitHubIcon from "../../assets/icons/github-icon.svg";
import StackOverflowIcon from "../../assets/icons/stackoverflow-icon.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Header component displaying availability status, social links, and contact information.
 *
 * @component
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.status}>
        <div className={styles.indicator}></div>
        <span className={styles.statusText}>Available to work!</span>
      </div>
      <nav className={styles.nav}>
        <ThemeToggle value={theme} onChange={toggleTheme} />
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
        <Link
          href="https://stackoverflow.com/users/8404234/haider-ali-anjum"
          target="_blank"
          aria-label="Stack Overflow"
        >
          <StackOverflowIcon className={styles.icon} />
        </Link>
        <a href="mailto:hello@hdrjs.de" className={styles.email}>
          hello@hdrjs.de
        </a>
      </nav>
    </header>
  );
};
export default Header;
