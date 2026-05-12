import type { CSSProperties } from "react";
import Layout from "../components/Layout";
import styles from "./Home.module.scss";

type AnimatedDelay = CSSProperties & { "--delay": string };

const delay = (value: string): AnimatedDelay => ({ "--delay": value });

const IndexPage = () => (
  <Layout title="hdr - Portfolio">
    <section className={styles.home} aria-label="HDR portfolio home">
      <div className={styles.hero}>
        <svg
          className={styles.wordmark}
          viewBox="0 0 920 360"
          role="img"
          aria-labelledby="wordmark-title wordmark-description"
        >
          <title id="wordmark-title">hdr</title>
          <desc id="wordmark-description">
            Animated geometric line art spelling the letters h, d, and r.
          </desc>

          <g aria-hidden="true">
            {/* h */}
            <path
              className={styles.frame}
              style={delay("0s")}
              pathLength="1"
              d="M92 318V42H208V318H92Z"
            />
            <path
              className={styles.frame}
              style={delay("0.12s")}
              pathLength="1"
              d="M208 154H318V318H208Z"
            />
            <path
              className={styles.curve}
              style={delay("0.28s")}
              pathLength="1"
              d="M98 210C119 172 157 154 208 154C269 154 318 204 318 266"
            />
            <path
              className={styles.rule}
              style={delay("0.44s")}
              pathLength="1"
              d="M92 266H318"
            />

            {/* d */}
            <path
              className={styles.frame}
              style={delay("0.26s")}
              pathLength="1"
              d="M476 42H592V318H476Z"
            />
            <path
              className={styles.curve}
              style={delay("0.42s")}
              pathLength="1"
              d="M482 154C414 154 360 207 360 267C360 327 414 318 476 318C538 318 592 267 592 207C592 168 544 154 482 154Z"
            />
            <path
              className={styles.rule}
              style={delay("0.58s")}
              pathLength="1"
              d="M476 154V318"
            />

            {/* r */}
            <path
              className={styles.frame}
              style={delay("0.52s")}
              pathLength="1"
              d="M642 154H758V318H642Z"
            />
            <path
              className={styles.curve}
              style={delay("0.68s")}
              pathLength="1"
              d="M648 210C668 174 706 154 758 154C820 154 870 204 870 266H758"
            />
            <path
              className={styles.rule}
              style={delay("0.84s")}
              pathLength="1"
              d="M642 266H870M758 154V318"
            />
          </g>
        </svg>
      </div>

      <ul className={styles.tags} aria-label="Professional roles">
        <li>Web Developer</li>
        <li className={styles.separator} aria-hidden="true">
          |
        </li>
        <li>JavaScript Enthusiast</li>
        <li className={styles.separator} aria-hidden="true">
          |
        </li>
        <li>UI/UX Designer</li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
