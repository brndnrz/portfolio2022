import Link from "next/link";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import styles from "../styles/Page.module.css";
import data from "../data";
import Image from "next/image";
const ID = ({ project }) => {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <section className={styles.section}>
        <div className={styles.div1}>
          <h1 className={styles.h1}>{project.title}</h1>
          <p className={styles.p}>{project.description}</p>
        </div>

        <div className={styles.div2}>
          <img
            src={`${project.featureIMG}`}
            alt={project.title}
            className={styles.img}
          />
          <img
            src={`${project.featureIMG}`}
            alt={project.title}
            className={styles.img}
          />{" "}
          <img
            src={`${project.featureIMG}`}
            alt={project.title}
            className={styles.img}
          />{" "}
          <img
            src={`${project.featureIMG}`}
            alt={project.title}
            className={styles.img}
          />
          <button type="button" className={styles.btn}>
            <a href={`${project.link}`} target="_blank" rel="noreferrer">
              View Site
            </a>
          </button>
        </div>
      </section>

      <Link href="/">
        <p className={styles.logo}>b.</p>
      </Link>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default ID;

// loading = 'lazy'

export async function getStaticPaths() {
  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  let pageID = context.params.id;
  return {
    props: { project: data[pageID] },
  };
}
