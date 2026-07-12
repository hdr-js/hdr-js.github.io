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
        { id: "about", label: "About", render: () => <About /> },
        { id: "career", label: "Career", render: () => <CareerJourney /> },
        { id: "skills", label: "Skills", render: () => <Skills /> },
        { id: "recommendations", label: "Praise", render: (active) => <Recommendations active={active} /> },
        { id: "contact", label: "Contact", render: () => <Contact /> },
      ]}
    />
  </Layout>
);

export default IndexPage;
