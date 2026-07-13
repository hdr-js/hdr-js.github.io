import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

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

const LONG_RECOMMENDATION_LENGTH = 560;

/**
 * Recommendations carousel sourced from exported LinkedIn recommendation data.
 * Left/Right arrow keys cycle while this section is active.
 */
const Recommendations: React.FC<Props> = ({ active }) => {
  const items = realRecommendations.length ? realRecommendations : recommendationsFallback;
  const [i, setI] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;
  const modalItem = modalIndex === null ? null : items[modalIndex];

  const go = (n: number) => setI((prev) => (n + items.length) % items.length);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === "Escape") setModalIndex(null);
        return;
      }
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
  }, [i, items.length, modalIndex]);

  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow} data-reveal>
        <span className={styles.dot} />
        <span>04 — LinkedIn recommendations:</span>
      </div>

      <div data-reveal>
        <div className={styles.quoteMark}>&ldquo;</div>
        <div className={styles.view}>
          <div className={styles.track} style={{ transform: `translateX(-${i * 100}%)` }}>
            {items.map((r, idx) => (
              (() => {
                const isLong = r.quote.length > LONG_RECOMMENDATION_LENGTH;
                return (
                  <article className={styles.slide} key={`${r.name}-${idx}`}>
                    <p className={styles.quote} data-long={isLong}>
                      {r.quote}
                    </p>
                    {isLong ? (
                      <button type="button" className={styles.readMore} onClick={() => setModalIndex(idx)}>
                        Read more
                      </button>
                    ) : null}
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
                );
              })()
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

      {isMounted && modalItem
        ? createPortal(
            <div
              className={styles.modalBackdrop}
              data-fullpage-lock="true"
              role="presentation"
              onClick={() => setModalIndex(null)}
              onWheel={(event) => event.stopPropagation()}
              onTouchStart={(event) => event.stopPropagation()}
              onTouchEnd={(event) => event.stopPropagation()}
            >
              <article
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="recommendation-dialog-title"
                onClick={(event) => event.stopPropagation()}
              >
                <button type="button" className={styles.closeBtn} aria-label="Close" onClick={() => setModalIndex(null)}>
                  <XIcon />
                </button>
                <div className={styles.modalHeader}>
                  <span className={styles.modalAvatar}>
                    {modalItem.imageUrl ? (
                      <img
                        src={modalItem.imageUrl}
                        alt=""
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <span>{modalItem.name?.[0] === "[" ? "?" : modalItem.name?.[0]}</span>
                  </span>
                  <div className={styles.modalIntro}>
                    <p className={styles.modalKicker}>LinkedIn recommendation</p>
                    <h3 id="recommendation-dialog-title" className={styles.modalTitle}>
                      {modalItem.name}
                    </h3>
                    <p className={styles.modalRole}>{modalItem.company ? `${modalItem.title}, ${modalItem.company}` : modalItem.title}</p>
                    {modalItem.relationship ? <p className={styles.modalRelationship}>{modalItem.relationship}</p> : null}
                  </div>
                  {modalItem.profileUrl ? (
                    <a className={styles.profileLink} href={modalItem.profileUrl} target="_blank" rel="noopener noreferrer">
                      LinkedIn profile
                    </a>
                  ) : null}
                </div>
                <p className={styles.modalQuote}>{modalItem.quote}</p>
              </article>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default Recommendations;
