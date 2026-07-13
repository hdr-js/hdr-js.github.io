import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
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

const splitRelationship = (relationship?: string | null) => {
  if (!relationship) return { date: null, context: null };
  const match = relationship.match(/^([A-Za-z]+ \d{1,2}, \d{4}),\s*(.+)$/);
  if (!match) return { date: null, context: relationship };
  return { date: match[1], context: match[2] };
};

/**
 * Recommendations carousel sourced from exported LinkedIn recommendation data.
 * Left/Right arrow keys cycle while this section is active.
 */
const Recommendations: React.FC<Props> = ({ active }) => {
  const items = realRecommendations.length ? realRecommendations : recommendationsFallback;
  const [i, setI] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [overflowingQuotes, setOverflowingQuotes] = useState<boolean[]>([]);
  const quoteRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;
  const currentItem = items[i];
  const modalItem = modalIndex === null ? null : items[modalIndex];
  const modalRelationship = splitRelationship(modalItem?.relationship);

  const go = (n: number) => setI((prev) => (n + items.length) % items.length);

  const renderAuthor = (item: Recommendation) => (
    <div className={styles.author}>
      <span className={styles.avatar}>
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <span>{item.name?.[0] === "[" ? "?" : item.name?.[0]}</span>
      </span>
      <span className={styles.authorText}>
        {item.profileUrl ? (
          <a className={styles.name} href={item.profileUrl} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        ) : (
          <span className={styles.name}>{item.name}</span>
        )}
        <span className={styles.role}>{item.company ? `${item.title}, ${item.company}` : item.title}</span>
      </span>
    </div>
  );

  const renderControls = () => (
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
  );

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    go(i + (dx < 0 ? 1 : -1));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const measure = () => {
      setOverflowingQuotes(
        items.map((_, idx) => {
          const quote = quoteRefs.current[idx];
          return quote ? quote.scrollHeight > quote.clientHeight + 1 : false;
        })
      );
    };

    measure();
    const timeout = window.setTimeout(measure, 80);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", measure);
    };
  }, [i, items]);

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
      <div className={styles.eyebrow} data-active={active} data-reveal>
        <span className={styles.dot} />
        <span>04 — LinkedIn recommendations:</span>
      </div>

      <div className={styles.body} data-reveal>
        <div className={styles.view} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className={styles.track} style={{ transform: `translateX(-${i * 100}%)` }}>
            {items.map((r, idx) => (
              <article className={styles.slide} key={`${r.name}-${idx}`}>
                <div className={styles.quoteBlock}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <p
                    ref={(element) => {
                      quoteRefs.current[idx] = element;
                    }}
                    className={styles.quote}
                    data-overflow={overflowingQuotes[idx]}
                  >
                    {r.quote}
                  </p>
                  {overflowingQuotes[idx] ? (
                    <button type="button" className={styles.readMore} onClick={() => setModalIndex(idx)}>
                      Read more
                    </button>
                  ) : null}
                </div>
                {r.relationship ? <p className={styles.relationship}>{r.relationship}</p> : null}
                <div className={styles.desktopAuthor}>{renderAuthor(r)}</div>
                <div className={styles.desktopControls}>{renderControls()}</div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.mobileDock}>
          {renderAuthor(currentItem)}
          {renderControls()}
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
                    <h3 id="recommendation-dialog-title" className={styles.modalTitle}>
                      {modalItem.name}
                    </h3>
                    <div className={styles.modalRoleLine}>
                      <p className={styles.modalRole}>{modalItem.company ? `${modalItem.title}, ${modalItem.company}` : modalItem.title}</p>
                      {modalItem.profileUrl ? (
                        <a className={styles.mobileProfileLink} href={modalItem.profileUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                          <LinkedInIcon aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  {modalItem.profileUrl ? (
                    <a className={styles.profileLink} href={modalItem.profileUrl} target="_blank" rel="noopener noreferrer">
                      LinkedIn profile <span aria-hidden="true">-&gt;</span>
                    </a>
                  ) : null}
                </div>
                {modalRelationship.context ? <p className={styles.modalRelationship}>{modalRelationship.context}</p> : null}
                <p className={styles.modalQuote}>{modalItem.quote}</p>
                {modalRelationship.date ? <p className={styles.modalDate}>{modalRelationship.date}</p> : null}
              </article>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default Recommendations;
