import React from "react";
import styles from "./Skills.module.scss";

interface Props {
  active?: boolean;
}

type ExpertiseGroup = {
  title: string;
  body: string;
};

const expertise: ExpertiseGroup[] = [
  {
    title: "App Development",
    body: "Building responsive web and mobile products with TypeScript, React and Next.js, with a focus on structure, maintainability and clear interaction patterns.",
  },
  {
    title: "Server and Cloud",
    body: "Designing practical APIs, services and data flows with Node.js, Express and MongoDB, keeping integration points simple, stable and easy to extend.",
  },
  {
    title: "Quality & Delivery",
    body: "Improving release confidence with Jest, Cypress and Docker, using repeatable checks, clean workflows and delivery habits that reduce avoidable risk.",
  },
  {
    title: "Design",
    body: "Supporting product decisions with Figma, UI/UX design and prototyping, connecting visual polish with usability, clarity and implementation detail.",
  },
];

const Skills: React.FC<Props> = ({ active = false }) => (
  <div className={styles.wrap}>
    <div className={styles.eyebrow} data-active={active} data-reveal>
      <span className={styles.dot} />
      <span>03 — Skills & Expertise</span>
    </div>
    <div className={styles.columns} data-reveal>
      {expertise.map((group) => (
        <section key={group.title} className={styles.column}>
          <h3>{group.title}</h3>
          <p>{group.body}</p>
        </section>
      ))}
    </div>
  </div>
);

export default Skills;
