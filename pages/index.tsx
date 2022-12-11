import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Twitter from "../components/Twitter";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Team />
        <Twitter />
      </Layout>
    </>
  );
}