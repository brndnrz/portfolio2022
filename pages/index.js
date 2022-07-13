import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectFeature from "../components/ProjectFeature";
import Hero from "../components/Hero";
import data from "../data";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>b.</title>
        <meta
          name="description"
          content="I&#39;m Brandon — a Software Developer &#38; Digital Designer. This is where I show some of my latest client work and personal projects. If you&#39;re looking to explore what ideas I have for your next venture, or need a developer to build out your designs shoot me an email. If the icon is green I&#39;m actively taking on new work!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <div className={styles.featureList}>
        {data.map((project) => {
          return <ProjectFeature key={project.id} project={project} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
