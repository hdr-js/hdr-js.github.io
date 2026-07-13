import React, { useEffect, useState } from "react";
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
  const [isHeroActive, setIsHeroActive] = useState(true);

  useEffect(() => {
    const onSectionChange = (event: Event) => {
      const { index } = (event as CustomEvent<{ index: number }>).detail;
      setIsHeroActive(index === 0);
    };

    window.addEventListener("portfolio-section-change", onSectionChange);
    return () => window.removeEventListener("portfolio-section-change", onSectionChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.status} data-visible={isHeroActive} aria-hidden={!isHeroActive}>
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
          <span className={styles.emailFull}>hello@hdrjs.de</span>
          <span className={styles.emailShort} aria-hidden="true">
            @
          </span>
        </a>
      </nav>
    </header>
  );
};
export default Header;
