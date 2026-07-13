import React, { useEffect, useRef, useState } from "react";
import { recommendationsFallback, Recommendation } from "../../data/portfolio";
import linkedinRecommendations from "../../data/linkedin-recommendations.json";
import styles from "./Recommendations.module.scss";

interface Props {
  active: boolean;
}

type LinkedInRecommendation = {
  name: string;
  title: string;
  relationship: string | null;
  recommendation: string;
  imageUrl: string;
  linkedinUrl: string;
};

const realRecommendations: Recommendation[] = (linkedinRecommendations as LinkedInRecommendation[])
  .map((item) => ({
    quote: item.recommendation,
    name: item.name,
    title: item.title,
    relationship: item.relationship,
    imageUrl: item.imageUrl,
    profileUrl: item.linkedinUrl,
  }))
  .filter((item) => item.quote && item.name);

/**
 * Recommendations carousel sourced from exported LinkedIn recommendation data.
 * Left/Right arrow keys cycle while this section is active.
 */
const Recommendations: React.FC<Props> = ({ active }) => {
  const items = realRecommendations.length ? realRecommendations : recommendationsFallback;
  const [i, setI] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  const go = (n: number) => setI((prev) => (n + items.length) % items.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!activeRef.current) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(i + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, items.length]);

  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow} data-reveal>
        <span className={styles.dot} />
        <span>04 — Recommendations</span>
      </div>

      <div data-reveal>
        <div className={styles.quoteMark}>&ldquo;</div>
        <div className={styles.view}>
          <div className={styles.track} style={{ transform: `translateX(-${i * 100}%)` }}>
            {items.map((r, idx) => (
              <article className={styles.slide} key={`${r.name}-${idx}`}>
                <p className={styles.quote}>{r.quote}</p>
                {r.relationship ? <p className={styles.relationship}>{r.relationship}</p> : null}
                <div className={styles.author}>
                  <span className={styles.avatar}>
                    {r.imageUrl ? (
                      <img
                        src={r.imageUrl}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <span>{r.name?.[0] === "[" ? "?" : r.name?.[0]}</span>
                  </span>
                  <span className={styles.authorText}>
                    {r.profileUrl ? (
                      <a className={styles.name} href={r.profileUrl} target="_blank" rel="noopener noreferrer">
                        {r.name}
                      </a>
                    ) : (
                      <span className={styles.name}>{r.name}</span>
                    )}
                    <span className={styles.role}>{r.company ? `${r.title}, ${r.company}` : r.title}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button type="button" className={styles.navBtn} aria-label="Previous" onClick={() => go(i - 1)}>
            ‹
          </button>
          <button type="button" className={styles.navBtn} aria-label="Next" onClick={() => go(i + 1)}>
            ›
          </button>
          <span className={styles.count}>
            {pad(i + 1)} / {pad(items.length)}
          </span>
          <span className={styles.source}>From LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
