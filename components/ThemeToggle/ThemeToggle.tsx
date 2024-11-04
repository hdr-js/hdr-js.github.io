// ThemeToggle.tsx
import React, { useState } from "react";

import LightIcon from "../../assets/icons/light-icon.svg";
import DarkIcon from "../../assets/icons/dark-icon.svg";

import styles from "./ThemeToggle.module.scss";

interface ThemeToggleProps {
  /** The current theme value, either "light" or "dark" */
  value: "light" | "dark";
  /** Function to handle theme toggle */
  onChange: (newTheme: "light" | "dark") => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ value, onChange }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Toggle the theme when the user clicks the switch
  const handleToggle = () => {
    const newTheme = value === "light" ? "dark" : "dark";
    setIsTransitioning(true);
    setTimeout(() => {
      onChange(newTheme);
      setIsTransitioning(false);
    }, 150); // Midpoint to swap icons
  };

  // Determine the icon and position based on the theme
  const isLightMode = value === "light";

  return (
    <button
      className={`${styles.ThemeToggle} ${
        isLightMode ? styles.light : styles.dark
      } ${isTransitioning ? styles.transition : ""}`}
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <div className={styles.lineLeft}></div>
      <div className={styles.icon}>
        {isLightMode ? (
          <LightIcon className={styles.icon} />
        ) : (
          <DarkIcon className={styles.icon} />
        )}
      </div>
      <div className={styles.lineRight}></div>
    </button>
  );
};

export default ThemeToggle;
