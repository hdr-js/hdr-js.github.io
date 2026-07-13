import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./FullPageScroll.module.scss";

export type PageSection = {
  id: string;
  label: string;
  render: (active: boolean) => ReactNode;
};

interface Props {
  sections: PageSection[];
}

/**
 * Full-viewport snap scroller. One wheel / arrow / swipe gesture advances a
 * single panel (debounced). Renders a fixed vertical dot-nav on the right.
 * Panels are sized to the viewport minus the fixed 5rem header, so the site
 * never grows a scrollbar and the existing <Header /> is left untouched.
 */
const FullPageScroll: React.FC<Props> = ({ sections }) => {
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const locked = useRef(false);
  const n = sections.length;

  const go = (i: number) => {
    const clamped = Math.max(0, Math.min(n - 1, i));
    if (clamped === idxRef.current || locked.current) return;
    locked.current = true;
    idxRef.current = clamped;
    setIdx(clamped);
    window.setTimeout(() => {
      locked.current = false;
    }, 950);
  };

  useEffect(() => {
    const modalLocksPageScroll = () => Boolean(document.querySelector("[data-fullpage-lock='true']"));

    const onWheel = (e: WheelEvent) => {
      if (modalLocksPageScroll()) return;
      e.preventDefault();
      if (locked.current || Math.abs(e.deltaY) < 12) return;
      go(idxRef.current + (e.deltaY > 0 ? 1 : -1));
    };
    const onKey = (e: KeyboardEvent) => {
      if (modalLocksPageScroll()) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(idxRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(idxRef.current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(n - 1);
      }
    };
    let sy = 0;
    const ts = (e: TouchEvent) => {
      if (modalLocksPageScroll()) return;
      sy = e.touches[0].clientY;
    };
    const te = (e: TouchEvent) => {
      if (modalLocksPageScroll()) return;
      const dy = sy - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 45) go(idxRef.current + (dy > 0 ? 1 : -1));
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchend", te);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  return (
    <>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateY(calc(${idx} * (5rem - 100vh)))` }}
        >
          {sections.map((s, i) => (
            <div key={s.id} id={s.id} className={styles.panel} data-active={i === idx}>
              {s.render(i === idx)}
            </div>
          ))}
        </div>
      </div>

      <nav className={styles.dots} aria-label="Section navigation">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={styles.dot}
            data-active={i === idx}
            onClick={() => go(i)}
            aria-label={s.label}
          >
            <span className={styles.dotLabel}>{s.label}</span>
            <span className={styles.pip} />
          </button>
        ))}
      </nav>
    </>
  );
};

export default FullPageScroll;
