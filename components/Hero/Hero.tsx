import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

/**
 * Hero: draws the animated "hdr" mark (Lottie) on load, a subtle scroll cue,
 * and the Engineer / Enthusiast / Designer line.
 * Place the exported Lottie JSON at /public/hdr-logo.json.
 */
const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let mounted = true;
    import("lottie-web").then((mod) => {
      if (!mounted || !container.current) return;
      anim = mod.default.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/hdr-logo.json",
      });
    });
    return () => {
      mounted = false;
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.center}>
        <div className={styles.logo} ref={container} />
        <div className={styles.hint} data-reveal>
          <span className={styles.hintText}>Scroll to explore</span>
          <span className={styles.arrow} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.titles} data-reveal>
        <span>Engineer</span>
        <span className={styles.slash}>/</span>
        <span>Enthusiast</span>
        <span className={styles.slash}>/</span>
        <span>Designer</span>
      </div>
    </div>
  );
};

export default Hero;
