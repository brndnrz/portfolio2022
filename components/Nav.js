import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.logo}>b.</div>
      </Link>
      <h3 className={styles.h3}>
        <span className={styles.span1}></span>
        <span className={styles.span2}></span>
        <a href="mailto:brndnruiz@gmail.com?subject=I'm Interested In Working With You!">
          available for work
        </a>
      </h3>
    </nav>
  );
};

export default Nav;
