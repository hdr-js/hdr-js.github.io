import Layout from "../components/Layout";
import FullPageScroll from "../components/FullPageScroll";
import Hero from "../components/Hero";
import About from "../components/About";
import CareerJourney from "../components/CareerJourney";
import Skills from "../components/Skills";
import Recommendations from "../components/Recommendations";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout title="Haider Ali Anjum — Portfolio">
    <FullPageScroll
      sections={[
        { id: "home", label: "Home", render: () => <Hero /> },
        { id: "about", label: "About", render: (active) => <About active={active} /> },
        { id: "career", label: "Career", render: (active) => <CareerJourney active={active} /> },
        { id: "skills", label: "Skills", render: (active) => <Skills active={active} /> },
        { id: "recommendations", label: "Praise", render: (active) => <Recommendations active={active} /> },
        { id: "contact", label: "Contact", render: (active) => <Contact active={active} /> },
      ]}
    />
  </Layout>
);

export default IndexPage;
