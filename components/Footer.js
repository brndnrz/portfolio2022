import Link from "next/link";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p className={styles.title}>
          I&#39;m Brandon — a Software Developer &#38; Digital Designer.
        </p>
        <p className={styles.p}>
          This is where I show some of my latest client work and personal
          projects. If you&#39;re looking to explore what ideas I have for your
          next venture, or you need a developer to build out your designs, shoot me
          an email. If the icon is green I&#39;m actively taking on new work!
        </p>
      </div>
      <Link href="/">
        <div className={styles.logo}>b.</div>
      </Link>
    </footer>
  );
};

export default Footer;
